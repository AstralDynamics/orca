import React from 'react'
import Search from './search'
import TopBar from './topbar'
import Dashboard from './dashboard'
import StudentProfile from '../containers/student-profile'

import { css, StyleSheet } from 'aphrodite'
import { gaps } from '../constants/styles'
import { searchFor } from '../util/search'

const styles = StyleSheet.create({
  main: {
    padding: `.1px ${gaps.medium}`
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
    const { students, competencies, year=1 } = this.props
    const { query } =this.state

    const filteredStudents = students
      .filter(student => student.year === year)
      .filter(student => searchFor(query)(student.name))

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
              competencies={competencies}
              students={filteredStudents} />
          </main>
        </Dashboard>
      </div>
    )
  }
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

