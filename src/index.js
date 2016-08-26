import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers'
import { withAuth } from './containers/with-auth'
import { withRole } from './containers/with-role'
import { autologin } from './actions/auth'
import Login from './containers/login'
import StudentDash from './components/student-dashboard'
import MentorDash from './components/mentor-dashboard'
import TutorDash from './components/tutor-dashboard'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

autologin()(store.dispatch)

const AuthenticatedApp = withAuth(
  withRole({
    student: StudentDash,
    mentor: MentorDash,
    tutor: TutorDash
  }, Login),
  Login
)

render(
  <Provider store={store}>
    <AuthenticatedApp />
  </Provider>,
  document.getElementById('root')
)

