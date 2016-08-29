import React from 'react'
import { css, StyleSheet } from 'aphrodite'

import { colors, gaps } from '../constants/styles'
import typography from '../styles/typography'

const styles = StyleSheet.create({
  outcome: {
    borderTop: `solid .5em ${colors.lightGrey}`,
    marginTop: '1em',
    position: 'relative',
    minHeight: '3em'
  },
  stage: {
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer'
  },
  content: {
  },
  first: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  last: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  marker: {
    borderRadius: '50%',
    fontSize: '2em',
    width: '1em',
    height: '1em',
    background: colors.lightGrey,
    margin: '0 auto',
    marginTop: '-.6em',
    boxSizing: 'border-box',
    transitionDuration: '.5s',
    border: `solid 0 ${colors.blue}`
  },
  review: {
    background: colors.lightBlue
  },
  partial: {
    background: colors.blue,
    border: `solid .5rem ${colors.lightGrey}`
  },
  complete: {
    background: colors.blue
  },
  partialReview: {
    borderColor: colors.lightBlue
  },
  container: {
    padding: gaps.medium
  }
})

/**
 * <LearningOutcome /> components need to be passed a learning outcome
 * from a competency _and_ a students progress towards that learning
 * outcome, so that progress and review status can be rendered.
 *
 * They also take an `onMark` callback which will be called when
 * a stage is clicked, passing the stage index as the only argument.
 */
function LearningOutcome({ outcome, studentOutcome=[], onMark }) {
  return (
    <div className={css(styles.container)}>
      <span className={css(typography.title)}>
        {outcome.title}
      </span>
      <div className={css(styles.outcome)}>
        <Stages
          stages={outcome.stages}
          studentStages={studentOutcome}
          onMark={onMark} />
      </div>
      <div className={css(styles.notes)}>
      </div>
    </div>
  )
}

LearningOutcome.propTypes = {
  outcome: React.PropTypes.object.isRequired,
  studentOutcome: React.PropTypes.array,
  onMark: React.PropTypes.func
}

LearningOutcome.defaultProps = {
  onMark() {
    console.warn('No `onMark` set for <LearningOutcome />')
  }
}

function Stages({ stages, studentStages=[], onMark }) {
  if(studentStages === null) studentStages = []
  const width = Math.floor(100 / stages.length)

  return (
    <div>
      {stages.map((stage, index) => {
        const isFirst = (index === 0)
        const isLast = (index === stages.length - 1)

        return (
          <div
            key={index}
            className={css(styles.stage)}
            style={{ width: `${width}%` }}
            onClick={e => onMark(index)}>
            <Stage
              stage={stage}
              studentStage={studentStages[index]}
              isFirst={isFirst}
              isLast={isLast} />
          </div>
        )
      })}
    </div>
  )
}

Stages.propTypes = {
  stages: React.PropTypes.array.isRequired,
  studentStages: React.PropTypes.array,
  onMark: React.PropTypes.func
}

function Stage({ stage, studentStage={}, isFirst, isLast }) {
  if(studentStage === null) studentStage = {}
  const { progress, review } = studentStage

  return (
    <div
      className={css(
        styles.content,
        isFirst && styles.first,
        isLast && styles.last
      )}>
      <Marker progress={progress} review={review} />
      <span className={css(typography.label)}>
        {stage}
      </span>
      <br />
      <span className={css(typography.hint)}>
        {progressHint(progress)}
      </span>
    </div>
  )
}

Stage.propTypes = {
  stage: React.PropTypes.string.isRequired,
  studentStage: React.PropTypes.object,
  isFirst: React.PropTypes.bool,
  isLast: React.PropTypes.bool
}

function Marker({ progress=0, review=false }) {
  const hasPartial = (progress === 1)
  const isComplete = (progress === 2)

  return (
    <div className={css(
      styles.marker,
      review && styles.review,
      hasPartial && styles.partial,
      isComplete && styles.complete,
      hasPartial && review && styles.partialReview
    )}></div>
  )
}

Marker.propTypes = {
  progress: React.PropTypes.number,
  review: React.PropTypes.bool
}

function progressHint(progress) {
  if(progress === 0) {
    return '(N/A)'
  }
  if(progress === 1) {
    return '(Partial)'
  }
  if(progress === 2) {
    return '(Complete)'
  }
}

export default LearningOutcome

