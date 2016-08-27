import React from 'react'
import Selector from './selector'
import Search from './search'
import Tray from './tray'
import TopBar from './topbar';
import StudentCompetencyList from '../containers/student-competency-list'

import { css, StyleSheet } from 'aphrodite'
import { gaps } from '../constants/styles'

const styles = StyleSheet.create({
  main: {
    marginTop: '3rem',
    padding: gaps.medium
  }
})

class StudentDashboard extends React.Component {
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
        <Tray position="top">
          <TopBar>
            <Search placeholder='Search for Competencies' />
          </TopBar>
        </Tray>

        <main className={css(styles.main)}>
          <StudentCompetencyList year={year} />
        </main>

        <Tray position='bottom'>
          <Selector
            onSelect={this.setYear}
            options={['Year 1', 'Year 2', 'Year 3']} />
        </Tray>
      </div>
    )
  }
}

export default StudentDashboard

