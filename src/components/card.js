import React from 'react'

import { css, StyleSheet } from 'aphrodite'
import { colors, gaps } from '../constants/styles'

export const cardHeight = '5rem'

const styles = StyleSheet.create({
  card: {
    marginTop: gaps.medium,
    height: cardHeight,
    background: colors.white,
    textAlign: 'center',
    fontSize: '1.5em',
    boxSizing: 'border-box',
    display: 'table',
    width: '100%',
    position: 'relative',
    boxSizing: 'border-box'
  },
  wrapper: {
    height: cardHeight,
    display: 'table-cell',
    verticalAlign: 'middle',
    padding: `0 1.25rem`
  },
  leftPad: {
    paddingLeft: cardHeight
  },
  textLeft: {
    textAlign: 'left'
  }
})

function Card({ children, leftPad, textLeft }) {
  return (
    <div className={css(
      styles.card,
      leftPad && styles.leftPad,
      textLeft && styles.textLeft
    )}>
      <div className={css(styles.wrapper)}>
        {children}
      </div>
    </div>
  )
}

export default Card

