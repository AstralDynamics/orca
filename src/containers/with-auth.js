import React from 'react'
import { connect } from 'react-redux'

export function withAuth(Component, DefaultView) {
  function Auth(props) {
    if(props.user) {
      return <Component {...props} />
    } else {
      return <DefaultView {...props} />
    }
  }

  function mapState(state) {
    return {
      user: state.auth && state.auth.user
    }
  }

  return connect(mapState)(Auth)
}

