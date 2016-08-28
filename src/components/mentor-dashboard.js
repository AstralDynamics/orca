import React from 'react'
import Selector from './selector'
import Tray from './tray'
import ReviewQueue from './review-queue'
import StudentList from '../containers/student-list'
import { all } from '../util/fp'
import { vals } from 'zaphod/compat'

class MentorDashboard extends React.Component {
  constructor() {
    super()
    this.state = { view: 'Review', year: 1 }
    this.views = ['Review', 'Students']
    this.setView = this.setView.bind(this)
    this.setYear = this.setYear.bind(this)
    this.filter = this.filter.bind(this)
  }
  setView(index) {
    this.setState({ view: this.views[index] })
  }
  setYear(index) {
    this.setState({ year: index + 1 })
  }
  filter(student) {
    return student.year === this.state.year
  }
  render() {
    const { view, year } = this.state

    function filterOnYear(student) {
      return student.year === year
    }

    function filterOnReview(competency) {
      // only show competencies that have been marked
      return true
    }

    return (
      <div>
        {view === 'Review'
          ? <StudentList
              filter={filterOnYear}
              filterCompetencies={filterOnReview} />
          : <StudentList filter={filterOnYear} />}

        <Tray position='bottom'>
          <Selector
            light={true}
            onSelect={this.setYear}
            options={['Year 1', 'Year 2', 'Year 3']} />

          <Selector options={this.views} onSelect={this.setView} />
        </Tray>
      </div>
    )
  }
}

export default MentorDashboard

