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

function Tray({ position, children, absolute }) {
  return (
    <div className={css(
      styles.tray,
      styles[position],
      absolute && styles.absolute
    )}>
      {children}
    </div>
  )
}

export default Tray
