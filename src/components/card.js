import React from 'react'

import { css, StyleSheet } from 'aphrodite'
import { colors, gaps } from '../constants/styles'

export const cardHeight = '5rem'

const styles = StyleSheet.create({
  card: {
    marginTop: gaps.medium,
    height: cardHeight,
    lineHeight: cardHeight,
    background: colors.white,
    padding: gaps.medium,
    textAlign: 'center',
    fontSize: '1.5em'
  }
})

function Card({ children }) {
  return (
    <div className={css(styles.card)}>
      {children}
    </div>
  )
}

export default Card

