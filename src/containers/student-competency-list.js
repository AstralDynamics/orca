import React from 'react'
import { connect } from 'react-redux'

import StudentCompetencyList from '../components/student-competency-list'

function StudentCompetenciesContainer(props) {
  const { competencies, student, id  } = props
  const { loadCompetencies, loadStudent, saveStudent, notify } = props

  if(!competencies || !student) {
    if(!competencies) loadCompetencies()
    if(!student) loadStudent(id)

    return null
  }

  return (
    <StudentCompetencyList
      {...props}
      student={student}
      notify={notify}
      competencies={competencies}
      saveStudent={saveStudent}
      loadStudent={loadStudent} />
  )
}

function mapState(state) {
  return {
    competencies: state.competency.competencies,
    student: state.students.currentStudent,
    id: state.auth.user.name
  }
}

import { loadCompetencies } from '../actions/competency'
import { loadStudent, saveStudent } from '../actions/students'
import { notify } from '../actions/notify'

const mapDispatch = {
  loadCompetencies,
  loadStudent,
  saveStudent,
  notify
}

export default connect(mapState, mapDispatch)(StudentCompetenciesContainer)

