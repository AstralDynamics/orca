import React from 'react'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }

    this.setField = this.setField.bind(this)
    this.tryLogin = this.tryLogin.bind(this)
  }
  setField(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value
      })
    }
  }
  tryLogin(event) {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }
  renderError(error) {
    return (
      <div key={error.status}>
        {error.message}
      </div>
    )
  }
  renderErrors(errors) {
    return (
      <div>
        <h3>There was a problem</h3>
        {errors.map(this.renderError)}
      </div>
    )
  }
  render() {
    const { username, password } = this.state
    const { errors } = this.props
    const hasErrors = errors.length > 0

    return (
      <form onSubmit={this.tryLogin}>
        <input
          type="text"
          value={username}
          onChange={this.setField('username')} />
        <input
          type="password"
          value={password}
          onChange={this.setField('password')} />
        <button>Login</button>
        {hasErrors && this.renderErrors(errors)}
      </form>
    )
  }
}

Login.defaultProps = {
  onSubmit() {
    console.warn('No submit handler provided for <Login />')
  },
  errors: []
}

