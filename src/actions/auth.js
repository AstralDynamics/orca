import { createDB } from '../util/db'
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT  } from '../constants/auth'

// Doesn't actually matter which DB is used for performing
// authentication tasks.
const db = createDB('competencies')

export function login(username, password) {
  return (dispatch) => {
    db.login(username, password)
      .then(user => loginSuccess(user))
      .catch(err => loginFailed(err))
      .then(dispatch)
  }
}

export function autologin() {
  return (dispatch) =>
    db.getSession()
      .then(session => loginSuccess(session.userCtx))
      .catch(err => logout())
      .then(dispatch)
}

export function logout() {
  return (dispatch) =>
    db.logout()
      .then(() => ({type: LOGOUT }))
      .then(dispatch)
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error
  }
}

