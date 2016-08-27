import { createDB } from '../util/db'
import { COMPETENCIES_LOADED, COMPETENCIES_LOADING_ERROR } from '../constants/student'

const db = createDB('competencies')

export function loadCompetencies() {
  return (dispatch) => {
    db.allDocs({ include_docs: true })
      .then(docs => competenciesLoaded(docs.rows))
      .catch(competenciesLoadingError)
      .then(dispatch)
  }
}

export function saveCompetency(competency) {
  return (dispatch) => {
    db.put(competency)
  }
}

export function competenciesLoaded(comps) {
  return {
    type: COMPETENCIES_LOADED,
    competencies: comps
  }
}

export function competenciesLoadingError(err) {
  return {
    type: COMPETENCIES_LOADING_ERROR,
    error: err
  }
}

