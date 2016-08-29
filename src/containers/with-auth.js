import React from 'react'
import { connect } from 'react-redux'

/**
 * Higher Order Component that renders <Component /> when the
 * store has been authenticared. Otherwise, render <DefaultView />
 */
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

