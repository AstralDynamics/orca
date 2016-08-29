import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { colors, shades } from '../constants/styles'
import Logout from '../containers/logout'

const styles = StyleSheet.create({
  topbar: {
    background: colors.white,
    textAlign: 'center',
    fontSize: '1.5em',
    height: '3rem',
    lineHeight: '3rem',
    paddingRight: '2em',
    position: 'relative'
  },
  pinRight: {
    position: 'absolute',
    width: '2em',
    right: 0,
    top: 0,
    background: shades.darken
  }
})

/**
 * <TopBar /> component which will always include a logout button
 */
function TopBar({ children }) {
  return (
    <nav className={css(styles.topbar)}>
      {children}
      <div className={css(styles.pinRight)}>
        <Logout />
      </div>
    </nav>
  )
}

export default TopBar

