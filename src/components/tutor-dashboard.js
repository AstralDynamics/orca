import React from 'react'
import Selector from './selector'
import Tray from './tray'
import ReviewQueue from './review-queue'
import StudentList from '../containers/student-list'

class TutorDashboard extends React.Component {
  constructor() {
    super()
    this.state = { year: 1 }
    this.setYear = this.setYear.bind(this)
  }
  setYear(index) {
    this.setState({ year: index + 1 })
  }
  render() {
    const { year } = this.state
    return (
      <div>
        <StudentList year={year} />}

        <Tray position='bottom'>
          <Selector
            onSelect={this.setYear}
            options={['Year 1', 'Year 2', 'Year 3']} />
        </Tray>
      </div>
    )
  }
}

export default TutorDashboard

