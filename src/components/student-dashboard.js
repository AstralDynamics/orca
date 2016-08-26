import React from 'react'
import Selector from './selector'
import Search from './search'
import Tray from './tray'
import TopBar from './topbar';

function StudentDashboard() {
  return (
    <div>
      <Tray position="top">
        <TopBar>
          <Search placeholder='Search for Competencies' />
        </TopBar>
      </Tray>

      <Tray position='bottom'>
        <Selector options={['Year 1', 'Year 2', 'Year 3']} />
      </Tray>
    </div>
  )
}

export default StudentDashboard

