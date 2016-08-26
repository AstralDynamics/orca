import React from 'react'
import Selector from '../components/selector'
import Tray from './tray'
import TopBar from './topbar';

function MentorDashboard() {
  return (
    <div>
      <Tray position="top">
        <TopBar />
      </Tray>

      <Tray position='bottom'>
        <Selector options={['Review', 'Students' ]} />
      </Tray>
    </div>
  )
}

export default MentorDashboard

