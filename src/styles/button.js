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
      boxShadow: 'none'
    }
  },
  circular: {
    borderRadius: '50%',
    fontSize: '2rem',
    height: '2em',
    width: '2em',
    lineHeight: '2em',
    textAlign: 'center',
    padding: 0
  },
  floating: {
    position: 'fixed',
    bottom: 0,
    zIndex: 100
  },
  plain: {
    background: colors.lightGrey,
    color: colors.darkGrey,
    ':active': {
      background: colors.grey
    }
  },
  warning: {
    background: colors.error
  }
})

