import React from 'react'
import logo from '../images/logo.svg'
import Logout from '../containers/logout'

export default function StudentDashboard() {
  return (
    <div>
      <Logout />
      <h1>Student</h1>
      <img src={logo} alt='Logo' />
    </div>
  )
}
