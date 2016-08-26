import { createDB } from '../util/db'
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT  } from '../constants/auth'

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

export function logout() {
  db.logout()
  return {
    type: LOGOUT
  }
}

