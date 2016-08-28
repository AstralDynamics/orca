import React from 'react'

import { css, StyleSheet } from 'aphrodite'
import { colors, shades, gaps } from '../constants/styles'

const styles = StyleSheet.create({
  notification: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '3em',
    lineHeight: '3em',
    width: '100%',
    background: shades.blueout,
    color: colors.white,
    zIndex: 10,
    padding: `0 ${gaps.medium}`,
    transform: 'translateY(-3em)',
    transitionDuration: '.2s'
  },
  active: {
    transform: 'translateY(0)',
    transitionDuration: '.4s'
  }
})

class Notifications extends React.Component {
  constructor({ notification }) {
    super()
    this.state = notification
  }
  componentWillReceiveProps({ notification }) {
    this.setState(notification)

    setTimeout(
      () => this.setState({ expired: true }),
      notification.duration
    )
  }
  render() {
    const { expired, text } = (this.state || { expired: true })

    return (
      <div className={css(
        styles.notification,
        !expired && styles.active
      )}>
        {text}
      </div>
    )
  }
}

export default Notifications

