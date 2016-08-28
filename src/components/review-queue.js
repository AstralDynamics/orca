import React from 'react'
import Dashboard from './dashboard';

import { css, StyleSheet } from 'aphrodite'
import { gaps } from '../constants/styles'

const styles = StyleSheet.create({
  main: {
    padding: `.1px ${gaps.medium}`
  }
})

function ReviewQueue() {
  return (
    <div>
      <Dashboard>
        <main className={css(styles.main)}>
        </main>
      </Dashboard>
    </div>
  )
}

export default ReviewQueue

