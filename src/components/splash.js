import React from 'react'
import { css, StyleSheet } from 'aphrodite'

import Login from '../containers/login'
import logo from '../images/logo.svg'
import { colors } from '../constants/styles'

const styles = StyleSheet.create({
  splash: {
    textAlign: 'center',
    marginTop: '3em'
  },
  title: {
    textTransform: 'uppercase'
  },
  footer: {
    marginTop: '1em',
    color: colors.grey
  }
})

export default function Splash() {
  return (
    <div className={css(styles.splash)}>
      <img src={logo} alt='Logo' width={128} />
      <h1 className={css(styles.title)}>Orca</h1>
      <Login />
      <footer className={css(styles.footer)}>
        &copy; 2016 Project Orca
      </footer>
    </div>
  )
}

