import { StyleSheet } from 'aphrodite'
import { colors } from '../constants/styles'

export default StyleSheet.create({
  title: {
    fontSize: '1.25rem',
    color: colors.darkGrey
  },
  label: {
    fontSize: '.9rem',
    color: colors.darkGrey
  },
  hint: {
    fontSize: '.9rem',
    color: colors.grey
  },
  name: {
    fontSize: '.9rem',
    color: colors.grey,
    fontWeight: 'bold'
  }
})

