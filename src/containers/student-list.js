import React from 'react'
import { connect } from 'react-redux'

import { loadStudents } from '../actions/students'
import { loadCompetencies } from '../actions/competency'
import StudentList from '../components/student-list'

/**
 * When this <StudentCompetenciesContainer /> is rendered, it
 * checks whether the store already contains the required
 * student and competencies, if not then fetch them.
 *
 * When both resources are available, it renders the <StudentList />
 * and passes the data and required actions down to it.
 */
function StudentListContainer(props) {
  const { students, competencies } = props
  const { loadStudents, loadCompetencies } = props

  if(!competencies || !students) {
    if(!students) loadStudents()
    if(!competencies) loadCompetencies()

    return null
  }

  return <StudentList
    {...props}
    students={students}
    competencies={competencies} />
}

function mapState(state) {
  return {
    students: state.students.students,
    competencies: state.competency.competencies
  }
}

const mapActions = {
  loadStudents,
  loadCompetencies
}

export default connect(mapState, mapActions)(StudentListContainer)

