import React from 'react'
import Selector from './selector'
import Tray from './tray'
import StudentList from '../containers/student-list'

class MentorDashboard extends React.Component {
  constructor() {
    super()
    this.state = { view: 'Review', year: 1 }
    this.views = ['Review', 'Students']
  }
  setView = (index) => {
    this.setState({ view: this.views[index] })
  }
  setYear = (index) => {
    this.setState({ year: index + 1 })
  }
  filter = (student) => {
    return student.year === this.state.year
  }
  render() {
    const { view, year } = this.state

    function filterOnYear(student) {
      return student.year === year
    }

    function filterOnReview(competency) {
      // TODO this filter currently recieves the competencies list
      // which doesnt include the students actual progress towards
      // completion.
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

