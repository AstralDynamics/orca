import { COMPETENCIES_LOADED, COMPETENCIES_LOADING_ERROR } from '../constants/student'

function studentReducer(student={}, action) {
  switch(action.type) {
    case COMPETENCIES_LOADED:
      return { ...student, competencies: action.competencies }
    case COMPETENCIES_LOADING_ERROR:
      return { ...student, error: action.error }
    default:
      return student
  }
}

export default studentReducer

