import React from 'react'
import { updateIn, setIn } from 'zaphod/compat'
import Card from './expandable-card'
import LearningOutcome from './learning-outcome'

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

  function editCompetency(competency, id) {
    const newStudent = setIn(
      student,
      ['competencies', id],
      competency
    )

    saveStudent(newStudent)
      .then(res => loadStudent(student._id))
      .then(doc => notify('Marked for mentor review!'))
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
            editCompetency={editCompetency}
            studentCompetency={student.competencies[comp.id]} />
        ))}
    </div>
  )
}

function Competency({ competency, studentCompetency, editCompetency }) {
  const { id, doc } = competency

  function onMark(outcomeIndex, stageIndex) {
    const newComp = updateIn(
      studentCompetency,
      ['outcomes', outcomeIndex, stageIndex, 'review'],
      review => !review
    );

    editCompetency(newComp, id)
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
              studentOutcome={studentCompetency.outcomes[index]}
              onMark={stageIndex => onMark(index, stageIndex)} />
            {(index !== doc.outcomes.length - 1) && <hr />}
          </div>
        ))}
      </footer>
    </Card>
  )
}

export default StudentCompetencyList

