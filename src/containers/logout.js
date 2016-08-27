import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import { colors } from '../constants/styles'

import ExitIcon from 'react-icons/lib/md/power-settings-new'

function Logout({ logout }) {
  return (
    <a href='#' onClick={logout}>
      <ExitIcon color={colors.grey} />
    </a>
  )
}

export default connect(
  () => ({ }),
  { logout }
)(Logout)

