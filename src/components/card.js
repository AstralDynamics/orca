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
    width: '100%'
  },
  wrapper: {
    height: cardHeight,
    display: 'table-cell',
    verticalAlign: 'middle',
  }
})

function Card({ children }) {
  return (
    <div className={css(styles.card)}>
      <div className={css(styles.wrapper)}>
        {children}
      </div>
    </div>
  )
}

export default Card

