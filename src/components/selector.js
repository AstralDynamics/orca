import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { colors, shades } from '../constants/styles'

const styles = StyleSheet.create({
  selector: {
    height: '3rem',
    lineHeight: '3rem',
    padding: '0 .5em',
    fontSize: '1.5em',
    background: colors.blue,
    color: colors.white,
    boxSizing: 'border-box'
  },
  option: {
    position: 'relative',
    top: -1,
    padding: '.25em .75em',
    fontSize: '1.25rem',
    borderRadius: '.15em',
    cursor: 'pointer',
    color: colors.white,
    outline: 'none',
    ':hover': {
      background: shades.lighten
    },
    ':focus': {
      background: shades.lighten
    }
  },
  column: {
    display: 'inline-block',
    textAlign: 'center'
  },
  active: {
    background: colors.darkBlue
  },
  light: {
    background: colors.paleGrey
  },
  lightOption: {
    color: colors.grey,
    ':focus': {
      background: shades.darken
    },
    ':hover': {
      background: shades.darken
    }
  },
  lightActive: {
    background: colors.paleBlue
  }
})

/**
 * <Selector /> takes options as props and renders as a multiple
 * choice bar, presenting all the available options. When clicked
 * the index for the clicked option will be passed into the `onSelect`
 * prop function.
 *
 * <Selector choices={['Foo', 'Bar']} onSelect={index => log(index)} />
 */
class Selector extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }
  selectIndex = (index) => {
    this.setState({ index })
    this.props.onSelect(index)
  }
  renderOption(option, index) {
    const { options, light } = this.props
    const isActive = (index === this.state.index)
    const width = 100 / options.length
    const inlineStyle = { width: width + '%' }

    return (
      <div
        key={option}
        className={css(styles.column)}
        style={inlineStyle}>
        <a
          href='#'
          onClick={e => this.selectIndex(index)}
          className={css(
            styles.option,
            isActive && styles.active,
            light && styles.lightOption,
            isActive && light && styles.lightActive
          )}>
        {option}
        </a>
      </div>
    )
  }
  render() {
    const { options, light } = this.props

    return (
      <div className={css(styles.selector, light && styles.light)}>
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
  },
  choices: []
}


Selector.propTypes = {
  onSelect: React.PropTypes.func,
  choices: React.PropTypes.array
}

export default Selector

