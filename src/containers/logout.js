import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'

function Logout({ logout }) {
  return (
    <a onClick={logout}>Sign Out</a>
  )
}

export default connect(
  () => ({ }),
  { logout }
)(Logout)

