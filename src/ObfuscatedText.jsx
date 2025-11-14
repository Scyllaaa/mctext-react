import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ObfuscatedText extends Component {
  generateText () {
    const text = this.props.text || this.props.children || ''
    let randomString = ''
    for (let i = 0; i < text.length; i++) {
      randomString += this.props.randomChars[Math.floor(Math.random() * this.props.randomChars.length)]
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
