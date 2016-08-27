import React from 'react'
import { connect } from 'react-redux'

import StudentCompetencyList from '../components/student-competency-list'
import { loadCompetencies } from '../actions/student'

function StudentCompetenciesContainer(props) {
  const { competencies, loadCompetencies } = props

  if(!competencies) {
    console.log('Need to fetch')
    loadCompetencies()
    return null
  } else {
    return (
      <StudentCompetencyList
        {...props}
        competencies={competencies} />
    )
  }
}

function mapState(state) {
  return {
    competencies: state.student.competencies
  }
}

const mapDispatch = {
  loadCompetencies
}

export default connect(mapState, mapDispatch)(StudentCompetenciesContainer)

