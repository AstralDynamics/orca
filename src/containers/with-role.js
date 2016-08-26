import React from 'react'
import { connect } from 'react-redux'

export function withRole(roleMap, DefaultView) {
  function Role({ myRoles }) {
    const roles = Object.keys(roleMap)

    for(const role of roles) {
      const Component = roleMap[role]
      if(myRoles.includes(role)) {
        return <Component />
      }
    }

    return <DefaultView />
  }

  Role.defaultProps = {
    myRoles: []
  }

  function mapState(state) {
    return {
      myRoles: state.auth && state.auth.user && state.auth.user.roles
    }
  }

  return connect(mapState)(Role)
}

