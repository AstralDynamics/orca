import { StyleSheet } from 'aphrodite'
import { fontFamily } from '../constants/styles'

export default StyleSheet.create({
  sansFont: {
    fontFamily: fontFamily
  },
  page: {
    maxWidth: 800,
    margin: '0 auto',
    minHeight: '100%'
  }
})
