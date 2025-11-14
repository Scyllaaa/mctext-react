import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ObfuscatedText extends Component {
  generateText () {
    const text = String(this.props.text || this.props.children || '')
    const chars = this.props.randomChars || ObfuscatedText.defaultProps.randomChars
    let randomString = ''
    for (let i = 0; i < text.length; i++) {
      randomString += chars[Math.floor(Math.random() * chars.length)]
    }
    return randomString
  }

  animate = () => {
    if (this.span && this.span.innerText) {
      this.span.innerText = this.generateText()
      window.requestAnimationFrame(this.animate)
    }
  }

  setSpan = (span) => {
    if (this.span == null && span != null) {
      this.span = span
      this.animate()
    } else {
      this.span = span
    }
  }

  render () {
    return <span ref={this.setSpan}>{this.generateText()}</span>
  }
}

ObfuscatedText.propTypes = {
  randomChars: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.string
}

ObfuscatedText.defaultProps = {
  randomChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!§$%&?#'
}
