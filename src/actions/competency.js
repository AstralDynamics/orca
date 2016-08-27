import { createDB } from '../util/db'
import { COMPETENCIES_LOADED, COMPETENCIES_LOADING_ERROR } from '../constants/competency'

const db = createDB('competencies')

export function loadCompetencies() {
  return (dispatch) => {
    db.allDocs({ include_docs: true })
      .then(docs => competenciesLoaded(docs.rows))
      .catch(competenciesLoadingError)
      .then(dispatch)
  }
}

export function competenciesLoaded(competencies) {
  return {
    type: COMPETENCIES_LOADED,
    competencies
  }
}

export function competenciesLoadingError(error) {
  return {
    type: COMPETENCIES_LOADING_ERROR,
    error
  }
}

