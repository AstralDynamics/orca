import React from 'react'
import Selector from './selector'
import Tray from './tray'
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
    const filterByYear = (student) => student.year === year

    return (
      <div>
        <StudentList filter={filterByYear} />}

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

