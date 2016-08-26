import React from 'react'
import { connect } from 'react-redux'

export function withAuth(Component, DefaultView) {
  function Auth({ user }) {
    if(user) {
      return <Component />
    } else {
      return <DefaultView />
    }
  }

  function mapState(state) {
    return {
      user: state.auth && state.auth.user
    }
  }

  return connect(mapState)(Auth)
}

