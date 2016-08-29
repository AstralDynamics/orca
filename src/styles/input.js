import { StyleSheet } from 'aphrodite'
import { colors, animations } from '../constants/styles'

export const textInput = StyleSheet.create({
  default: {
    fontFamily: 'inherit',
    border: 0,
    fontSize: '1.5em',
    borderBottom: `solid 3px ${colors.lightGrey}`,
    background: 'transparent',
    color: colors.grey,
    ':focus': {
      outline: 'none',
      borderColor: colors.grey,
      color: colors.darkGrey
    }
  },
  error: {
    animation: animations.shake
  }
})

export const textarea = StyleSheet.create({
  default: {
    fontFamily: 'inherit',
    width: '100%',
    boxSizing: 'border-box',
    background: colors.white,
    fontSize: '1em',
    color: colors.grey,
    border: 0,
    ':focus': {
      color: colors.darkGrey
    }
  }
})


