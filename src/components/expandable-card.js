import React from 'react'
import Card from './card';
import { css, StyleSheet } from 'aphrodite'
import { colors } from '../constants/styles'

const styles = StyleSheet.create({
  trigger: {
    cursor: 'pointer'
  },
  expander: {
    background: colors.paleGrey
  }
})

class ExpandableCard extends React.Component {
  constructor() {
    super()
    this.state = { expanded: false }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({ expanded: !this.state.expanded })
  }
  render() {
    let { children } = this.props
    children = children instanceof Array ? children : [children]
    const [card, ...extra] = children
    const { expanded } = this.state

    return (
      <div>
        <div onClick={this.toggle} className={css(styles.trigger)}>
          <Card {...this.props}>
            {card}
          </Card>
        </div>
        {expanded && (
          <div className={css(styles.expander)}>
            {extra}
          </div>
        )}
      </div>
    )
  }
}

export default ExpandableCard

