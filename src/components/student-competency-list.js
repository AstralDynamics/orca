import React from 'react'
import { updateIn, getIn } from 'zaphod/compat'
import Card from './expandable-card'
import LearningOutcome from './learning-outcome'
import { COMPLETE } from '../constants/progress'

import { searchFor } from '../util/search'

function StudentCompetencyList({
  competencies,
  year,
  query='',
  student,
  saveStudent,
  loadStudent,
  notify
}) {

  function editCompetency(id, outcomeIndex, stageIndex) {
    const progress = getIn(
      student,
      ['competencies', id, 'outcomes', outcomeIndex, stageIndex, 'progress']
    )

    if(progress === COMPLETE) {
      notify('Can\'t mark completed outcome for review!', { theme: 'error' })
      return
    }

    const review = getIn(
      student,
      ['competencies', id, 'outcomes', outcomeIndex, stageIndex, 'review']
    )

    const newStudent = updateIn(
      student,
      ['competencies', id, 'outcomes', outcomeIndex, stageIndex, 'review'],
      review => !review
    )

    saveStudent(newStudent)
      .then(res => loadStudent(student._id))
      .then(doc => notify(
        review
          ? 'Unmarked from mentor review'
          : 'Marked for mentor review!'
      ))
      .catch(err => console.error(err))
  }

  return (
    <div>
      {competencies
        .filter(comp => searchFor(query)(comp.doc.name))
        .filter(comp => comp.doc.year === year)
        .map(comp => (
          <Competency
            key={comp.id}
            competency={comp}
            notify={notify}
            editCompetency={editCompetency}
            studentCompetency={student.competencies[comp.id]} />
        ))}
    </div>
  )
}

function Competency({ competency, studentCompetency, editCompetency, notify }) {
  const { id, doc } = competency

  function getStudentOutcome(index) {
    return getIn(
      studentCompetency,
      ['outcomes', index],
      {}
    )
  }

  return (
    <Card>
      <header>
        {doc.name}
      </header>
      <footer>
        {doc.outcomes.map((outcome, index) => (
          <div key={index}>
            <LearningOutcome
              outcome={outcome}
              studentOutcome={getStudentOutcome(index)}
              onMark={stageIndex => editCompetency(id, index, stageIndex)} />
            {(index !== doc.outcomes.length - 1) && <hr />}
          </div>
        ))}
      </footer>
    </Card>
  )
}

export default StudentCompetencyList

