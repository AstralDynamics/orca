import React from 'react'
import Selector from './selector'
import Tray from './tray'
import ReviewQueue from './review-queue'
import StudentList from '../containers/student-list'

class MentorDashboard extends React.Component {
  constructor() {
    super()
    this.state = { view: 'Students', year: 1 }
    this.views = ['Review', 'Students']
    this.setView = this.setView.bind(this)
    this.setYear = this.setYear.bind(this)
  }
  setView(index) {
    this.setState({ view: this.views[index] })
  }
  setYear(index) {
    this.setState({ year: index + 1 })
  }
  render() {
    const { view, year } = this.state
    return (
      <div>
        {view === 'Review'
          ? <ReviewQueue year={year} />
          : <StudentList year={year} />}

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

