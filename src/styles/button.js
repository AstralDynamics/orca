import { StyleSheet } from 'aphrodite'
import { colors } from '../constants/styles'

export const button = StyleSheet.create({
  default: {
    background: colors.blue,
    border: 0,
    color: colors.white,
    fontFamily: 'inherit',
    fontSize: '1.25em',
    borderRadius: '.15em',
    padding: '.25em .75em',
    cursor: 'pointer',
    outline: 'none',
    ':focus': {
      boxShadow: 'inset 100px 100px rgba(255, 255, 255, 0.2)'
    },
    ':active': {
      background: colors.darkBlue,
    }
  }
})

