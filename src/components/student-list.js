import React from 'react'
import Search from './search'
import TopBar from './topbar'
import Dashboard from './dashboard'
import StudentProfile from '../containers/student-profile'
import { constantly } from 'zaphod'

import { css, StyleSheet } from 'aphrodite'
import { gaps } from '../constants/styles'
import { searchFor } from '../util/search'

const styles = StyleSheet.create({
  main: {
    padding: `.1px ${gaps.medium}`,
    paddingBottom: '6.8em'
  },
  resetList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }
})

class StudentList extends React.Component {
  constructor() {
    super()
    this.state = { query: '' }
    this.setQuery = this.setQuery.bind(this)
  }
  setQuery(query) {
    this.setState({ query })
  }
  render() {
    const { students, competencies } = this.props
    const { filter, filterCompetencies } = this.props
    const { query } = this.state

    const filteredStudents = students
      .filter(filter)
      .filter(student => searchFor(query)(student.name))

    const filteredCompetencies = competencies
      .filter(filterCompetencies)

    return (
      <div>
        <TopBar>
          <Search
            placeholder='Search for Students'
            onSearch={this.setQuery} />
        </TopBar>

        <Dashboard>
          <main className={css(styles.main)}>
            <Students
              competencies={filteredCompetencies}
              students={filteredStudents} />
          </main>
        </Dashboard>
      </div>
    )
  }
}

StudentList.defaultProps = {
  filter: constantly(true),
  filterCompetencies: constantly(true)
}

function Students({ students, competencies }) {
  return (
    <ul className={css(styles.resetList)}>
      {students.map(student => (
        <li key={student._id}>
          <StudentProfile
            student={student}
            competencies={competencies} />
        </li>
      ))}
    </ul>
  )
}

export default StudentList

