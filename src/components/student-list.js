import React from 'react'
import Search from './search'
import TopBar from './topbar'
import Dashboard from './dashboard'
import StudentProfile from '../containers/student-profile'

import { css, StyleSheet } from 'aphrodite'
import { gaps } from '../constants/styles'

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

function StudentList({ students, competencies, year=1 }) {
  function yearFilter(student) {
    return student.year === year
  }

  return (
    <div>
      <TopBar>
        <Search
          placeholder='Search for Students' />
      </TopBar>

      <Dashboard>
        <main className={css(styles.main)}>
          <Students
            competencies={competencies}
            students={students.filter(yearFilter)} />
        </main>
      </Dashboard>
    </div>
  )
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

