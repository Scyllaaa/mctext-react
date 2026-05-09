import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

let wasmModule = null
let wasmPromise = null

function loadWasm () {
  if (!wasmPromise) {
    wasmPromise = import('@hexze/mctext').then(async (mod) => {
      if (typeof mod.default === 'function') {
        await mod.default()
      }
      wasmModule = mod
      return mod
    })
  }
  return wasmPromise
}

export default function McText ({ children, size = 16, shadow = true, style, ...other }) {
  const canvasRef = useRef(null)
  const [wasm, setWasm] = useState(wasmModule)

  useEffect(() => {
    if (!wasm) {
      loadWasm().then(setWasm)
    }
  }, [wasm])

  useEffect(() => {
    if (!wasm || !canvasRef.current) return

    const canvas = canvasRef.current
    const text = typeof children === 'string' ? children.trim() : ''
    if (!text) return

    const { MCText: MCTextClass, FontSystem, LayoutOptions, render } = wasm

    let mctext = null
    let fontSystem = null
    let options = null
    let result = null

    try {
      mctext = MCTextClass.parse(text)
      fontSystem = FontSystem.modern()
      options = new LayoutOptions(size).withShadow(shadow)
      result = render(fontSystem, mctext, 4096, 512, options)

      const w = result.width()
      const h = result.height()
      canvas.width = w
      canvas.height = h

      const ctx = canvas.getContext('2d')
      const imageData = new ImageData(new Uint8ClampedArray(result.data()), w, h)
      ctx.putImageData(imageData, 0, 0)
    } catch (err) {
      console.error('McText render error:', err)
    } finally {
      mctext?.free()
      fontSystem?.free()
      options?.free()
      result?.free()
    }
  }, [wasm, children, size, shadow])

  if (!wasm) return null

  return <canvas ref={canvasRef} style={style} {...other} />
}

McText.propTypes = {
  children: PropTypes.string,
  size: PropTypes.number,
  shadow: PropTypes.bool,
  style: PropTypes.object
}
