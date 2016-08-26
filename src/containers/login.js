import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/login'
import { login } from '../actions/auth'

class LoginContainer extends React.Component {
  constructor() {
    super()
    this.state = { }
    this.tryLogin = this.tryLogin.bind(this)
  }
  tryLogin({ username, password }) {
    const { login } = this.props
    login(username, password)
  }
  render() {
    const { errors } = this.props
    return <Login onSubmit={this.tryLogin} errors={errors} />
  }
}

function mapState(state) {
  return {
    errors: state.auth.errors
  }
}

const mapActions = {
  login
}

export default connect(mapState, mapActions)(LoginContainer)

