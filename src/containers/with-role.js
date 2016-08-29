import React from 'react'
import { connect } from 'react-redux'

/**
 * HOC that renders takes a map of role => Component, then
 * uses the roles of the authenticated user in the store to decide
 * which <Component /> to render. Otherwise, render <DefaultView />
 */
export function withRole(roleMap, DefaultView) {
  function Role(props) {
    const { myRoles } = props
    const roles = Object.keys(roleMap)

    for(const role of roles) {
      const Component = roleMap[role]
      if(myRoles.includes(role)) {
        return <Component {...props} />
      }
    }

    console.warn(`No view for roles: ${myRoles}`)
    return <DefaultView {...props} />
  }

  Role.defaultProps = {
    myRoles: []
  }

  function mapState(state) {
    return {
      myRoles: state.auth.user && state.auth.user.roles
    }
  }

  return connect(mapState)(Role)
}

