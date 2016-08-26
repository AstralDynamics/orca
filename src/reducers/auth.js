export default authReducer

import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../constants/auth'

function authReducer(auth={}, action) {
  console.log(action)
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...auth, user: action.user }
    case LOGIN_FAILED:
      return { ...auth, errors: [action.error] }
    case LOGOUT:
      return {}
    default:
      return auth
  }
}

