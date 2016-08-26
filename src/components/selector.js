import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { colors, shades } from '../constants/styles'

const styles = StyleSheet.create({
  selector: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: '.5em',
    fontSize: '1.25em',
    background: colors.blue,
    color: colors.white,
    boxSizing: 'border-box'
  },
  option: {
    padding: '.2em .5em',
    borderRadius: '.15em',
    cursor: 'pointer',
    ':hover': {
      background: shades.lighten
    }
  },
  column: {
    display: 'inline-block',
    textAlign: 'center'
  },
  active: {
    background: colors.darkBlue
  }
})

class Selector extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
    this.selectIndex = this.selectIndex.bind(this)
  }
  selectIndex(index) {
    this.setState({ index })
    this.props.onSelect(index)
  }
  renderOption(option, index) {
    const { options } = this.props
    const isActive = (index === this.state.index)
    const width = 100 / options.length

    return (
      <div
        key={option}
        className={css(styles.column)}
        style={{ width: `${width}%` }}>
        <a
          onClick={e => this.selectIndex(index)}
          className={css(
            styles.option,
            isActive && styles.active
          )}>
        {option}
        </a>
      </div>
    )
  }
  render() {
    const { options } = this.props

    return (
      <div className={css(styles.selector)}>
        <nav>
          {options.map(this.renderOption, this)}
        </nav>
      </div>
    )
  }
}

Selector.defaultProps = {
  onSelect() {
    console.warn('No `onSelect` provided for <Selector />')
  }
}

export default Selector

