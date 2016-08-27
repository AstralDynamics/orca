import React from 'react'
import Selector from './selector'
import Search from './search'
import Tray from './tray'
import TopBar from './topbar';
import Dashboard from './dashboard';
import StudentCompetencyList from '../containers/student-competency-list'

import { css, StyleSheet } from 'aphrodite'
import { gaps } from '../constants/styles'

const styles = StyleSheet.create({
  main: {
    padding: `.1px ${gaps.medium}`
  }
})

class StudentDashboard extends React.Component {
  constructor() {
    super()
    this.state = { year: 1 }

    this.setYear = this.setYear.bind(this)
    this.setQuery = this.setQuery.bind(this)
  }
  setYear(index) {
    this.setState({ year: index + 1 })
  }
  setQuery(query) {
    this.setState({ query })
  }
  render() {
    const { year, query } = this.state

    return (
      <div>
        <TopBar>
          <Search
            placeholder='Search for Competencies'
            onSearch={this.setQuery} />
        </TopBar>

        <Dashboard>
          <main className={css(styles.main)}>
            <StudentCompetencyList year={year} query={query} />
          </main>
        </Dashboard>

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

