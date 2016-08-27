import React from 'react'
import Card from './expandable-card';
import LearningOutcome from './learning-outcome'

import { searchFor } from '../util/search'

function Competency({ competency, studentCompetency, editCompetency }) {
  const { id, doc } = competency

  function onMark(outcomeIndex, stageIndex) {
    const comp = studentCompetency.outcomes[outcomeIndex][stageIndex]
    comp.review = !comp.review
    editCompetency(comp)
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

function StudentCompetencyList({
  competencies,
  year,
  query='',
  student,
  saveStudent
}) {
  function editCompetency() {
    saveStudent(student)
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

export default StudentCompetencyList

