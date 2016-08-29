import React from 'react'

import { css, StyleSheet } from 'aphrodite'
import { textarea } from '../styles/input'
import { button } from '../styles/button'
import typography from '../styles/typography'
import { gaps, shades, colors } from '../constants/styles'

import TimeAgo from 'react-timeago'
import CheckIcon from 'react-icons/lib/md/check'
import DeleteIcon from 'react-icons/lib/md/delete'
import Tray from './tray'
import Avatar from './avatar'
import Card from './avatar'

const styles = StyleSheet.create({
  form: {
    padding: gaps.medium
  },
  action: {
    margin: '0 .5em'
  },
  actionBar: {
    position: 'relative',
    textAlign: 'center',
    background: shades.darken,
    height: '7rem',
    lineHeight: '7rem'
  },
  progressNote: {
    margin: `${gaps.medium} 0`
  },
  meta: {
    display: 'inline-block',
    padding: `0 ${gaps.medium}`
  },
  text: {
    margin: 0
  }
})

/**
 * Component for allowing staff to make progress notes
 */
export function ProgressNotesEntry({ notes=[], addFeedback }) {
  return (
    <div className={css(styles.form)}>
      {notes.length > 0 && <strong>Progress Notes</strong>}
      {notes.map(note => <ProgressNote key={note._id} {...note} />)}
      <FeedbackEntry addFeedback={addFeedback} />
    </div>
  )
}

ProgressNotesEntry.PropTypes = {
  notes: React.PropTypes.array,
  addFeedback: React.PropTypes.func
}

/**
 * Component for showing students their progress notes
 */
export function ProgressNotes({ notes=[] }) {
  return (
    <div className={css(styles.form)}>
      {notes.length > 0 && <strong>Progress Notes</strong>}
      {notes.map(note => <ProgressNote key={note._id} {...note} />)}
    </div>
  )
}

ProgressNotes.PropTypes = {
  notes: React.PropTypes.array
}

function ProgressNote({ from, date, text }) {
  return (
    <div className={css(styles.progressNote)}>
      <Avatar width={32} height={32} id={from} hue={320} />
      <div className={css(styles.meta)}>
        <div className={css(typography.name)}>{from}</div>
        <span className={css(typography.hint)}>
          <TimeAgo date={date} />
        </span>
      </div>
      <p className={css(styles.text)}>{text}</p>
      <hr />
    </div>
  )
}


function ActionButton({ onClick, children, theme }) {
  return (
    <button
      onClick={onClick}
      className={css(
        button.default,
        button.circular,
        button[theme],
        styles.action
      )}>
      {children}
    </button>
  )
}

class FeedbackEntry extends React.Component {
  constructor() {
    super()
    this.state = { feedback: '' }
  }
  setFeedback = (event) => {
    this.setState({ feedback: event.target.value })
  }
  clearFeedback = (event) => {
    this.setState({ feedback: '' })
  }
  saveFeedback = (event) => {
    this.props.addFeedback(this.state.feedback)
    this.clearFeedback()
  }
  render() {
    const { feedback } = this.state
    const isTyping = feedback.length > 0

    const actions = (
      <Tray position='bottom' zIndex={50}>
        <div className={css(styles.actionBar)}>
          <ActionButton onClick={this.clearFeedback} theme='warning'>
            <DeleteIcon />
          </ActionButton>
          <ActionButton onClick={this.saveFeedback}>
            <CheckIcon />
          </ActionButton>
        </div>
      </Tray>
    )

    return (
      <div>
        <textarea
          className={css(textarea.default)}
          onChange={this.setFeedback}
          value={feedback}
          placeholder="Add note">
        </textarea>
        {isTyping && actions}
      </div>
    )
  }
}


