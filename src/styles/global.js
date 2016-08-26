import { StyleSheet } from 'aphrodite'
import { fontFamily, colors } from '../constants/styles'

export default StyleSheet.create({
  sansFont: {
    fontFamily: fontFamily,
    color: colors.black
  },
  page: {
    maxWidth: 800,
    margin: '0 auto',
    minHeight: '100%'
  }
})
