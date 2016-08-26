import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { css } from 'aphrodite'

import reducer from './reducers'
import { withAuth } from './containers/with-auth'
import { withRole } from './containers/with-role'
import { autologin } from './actions/auth'
import Splash from './components/splash'
import StudentDash from './components/student-dashboard'
import MentorDash from './components/mentor-dashboard'
import TutorDash from './components/tutor-dashboard'
import styles from './styles/global'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const AuthenticatedApp = withAuth(
  withRole({
    student: StudentDash,
    mentor: MentorDash,
    tutor: TutorDash
  }, Splash),
  Splash
)

// attempt to login immediately
autologin()(store.dispatch)

// global styles
const className = css(
  styles.sansFont,
  styles.page
)

render(
  <Provider store={store}>
    <div className={className}>
      <AuthenticatedApp />
    </div>
  </Provider>,
  document.getElementById('root')
)

