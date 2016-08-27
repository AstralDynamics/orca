import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const styles = StyleSheet.create({
  dash: {
    maxWidth: 800,
    margin: '0 auto'
  }
})

function Dashboard({ children }) {
  return (
    <div className={css(styles.dash)}>
      {children}
    </div>
  )
}

export default Dashboard
