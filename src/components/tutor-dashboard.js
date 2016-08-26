import React from 'react'
import Selector from '../components/selector'
import Search from './search'
import Tray from './tray'
import TopBar from './topbar';

function TutorDashboard() {
  return (
    <div>
      <Tray position="top">
        <TopBar>
          <Search placeholder='Search for Students' />
        </TopBar>
      </Tray>

      <Tray position='bottom'>
        <Selector options={['Year 1', 'Year 2', 'Year 3']} />
      </Tray>
    </div>
  )
}

export default TutorDashboard

