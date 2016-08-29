import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const styles = StyleSheet.create({
  tray: {
    position: 'fixed'
  },
  bottom: {
    bottom: 0,
    left: 0,
    width: '100%'
  },
  top: {
    top: 0,
    left: 0,
    width: '100%'
  }
})

/**
 * <Tray /> is a utility for displaying fixed position elements.
 */
function Tray({ position, children, zIndex=1 }) {
  return (
    <div
      style={{ zIndex }}
      className={css(
        styles.tray,
        styles[position]
      )}>
      {children}
    </div>
  )
}

export default Tray
