import { combineReducers } from 'redux'
import auth from './auth'
import competency from './competency'
import students from './students'
import notify from './notify'

export default combineReducers({
  auth,
  competency,
  students,
  notify
})
