import React from 'react'
import logo from '../images/logo.svg'
import Logout from '../containers/logout'
import Selector from '../components/selector'

export default function StudentDashboard() {
  return (
    <div>
      <Logout />
      <h1>Student</h1>
      <img src={logo} alt='Logo' />
      <Selector options={['Year 1', 'Year 2', 'Year 3']} />
    </div>
  )
}

