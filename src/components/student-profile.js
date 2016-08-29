import React from 'react'
import { updateIn, setIn } from 'zaphod/compat'

import ExpandableCard from './expandable-card'
import { cardHeight } from './card'
import Avatar from './avatar'
import LearningOutcome from './learning-outcome'
import { cycleProgress } from '../util/progress'

import typography from '../styles/typography'
import { css, StyleSheet } from 'aphrodite'
import { colors, gaps } from '../constants/styles'

const styles = StyleSheet.create({
  heading: {
    background: colors.blue,
    color: colors.white,
    fontWeight: 'bold',
    padding: gaps.medium
  }
})

/**
 * <StudentProfile /> is the *complex* presentational layer
 * that allows staff to interact with students and mark their
 * competencies with progress.
 *
 * When a learning outcome stage is marked this component will
 * create (if necessary), then remove the review status, then
 * create (if necessary) and toggle the progress state for that
 * stage, before passing a new copy of the student to the
 * `saveStudent` prop callback.
 *
 * It also expects a `loadStudent` prop to be present, which when
 * called with a student id will re-fetch the student from the server
 * so that any updates can be shown.
 */
function StudentProfile(props) {
  const { student, competencies } = props
  const { notify, saveStudent, loadStudent } = props

  function editStudent(competencyId, outcomeIndex, stageIndex) {
    const markedProgress = updateIn(
      student,
      ['competencies', competencyId, 'outcomes', outcomeIndex, stageIndex, 'progress'],
      cycleProgress
    )

    const markedReview = setIn(
      markedProgress,
      ['competencies', competencyId, 'outcomes', outcomeIndex, stageIndex, 'review'],
      false
    )

    saveStudent(markedReview)
      .then(res => loadStudent(student._id))
      .then(doc => notify(`Marked ${student.name}'s progress`))
      .catch(err => console.error(err))
  }

  const avatarStyles = {
    width: cardHeight,
    height: cardHeight,
    position: 'absolute',
    left: 0,
    top: 0
  }

  return (
    <ExpandableCard leftPad={true} textLeft={true}>
      <header>
        <Avatar id={student._id} style={avatarStyles}/>
        <div>{student.name}</div>
        <div className={css(typography.email)}>{student.email}</div>
      </header>
      <StudentCompetencies
        onEdit={editStudent}
        student={student}
        competencies={competencies} />
    </ExpandableCard>
  )
}

function StudentCompetencies({ student, competencies, onEdit }) {
  const studentCompetencyIds = Object.keys(student.competencies)

  return (
    <div>
      {studentCompetencyIds.map(id => {
        const competency = competencies.find(c => c.id === id)
        const studentCompetency = student.competencies[id]

        if(!competency) return null

        return (
          <section key={id}>
            <header className={css(styles.heading)}>
              {competency.doc.name}
            </header>
            {competency.doc.outcomes.map((outcome, index) => (
              <div key={index}>
                <LearningOutcome
                  outcome={outcome}
                  studentOutcome={studentCompetency.outcomes[index]}
                  onMark={stageIndex => onEdit(id, index, stageIndex)} />
                {(index !== competency.doc.outcomes.length - 1) && <hr />}
              </div>
            ))}
          </section>
        )
      })}
    </div>
  )
}

export default StudentProfile

