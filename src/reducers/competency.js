import { COMPETENCIES_LOADED, COMPETENCIES_LOADING_ERROR } from '../constants/competency'

function competencyReducer(competency={}, action) {
  switch(action.type) {
    case COMPETENCIES_LOADED:
      return { ...competency, competencies: action.competencies }
    case COMPETENCIES_LOADING_ERROR:
      return { ...competency, error: action.error }
    default:
      return competency
  }
}

export default competencyReducer

