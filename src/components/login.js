import React from 'react'
import { css } from 'aphrodite'
import { textInput } from '../styles/input'
import { button } from '../styles/button'
import { form } from '../styles/form'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isloading: false,
      hasAttemptedLogin: false
    }
  }
  setField = (name) => {
    return (event) => {
      this.setState({
        [name]: event.target.value
      })
    }
  }
  tryLogin = (event) => {
    const { username, password } = this.state
    const { onSubmit } = this.props

    if(username && password) {
      onSubmit(username, password)
      this.setState({ isLoading: true })
    } else {
      this.setState({ hasAttemptedLogin: true })
    }

    // prevent form trying to navigate away
    event.preventDefault()
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
        <strong>Oops!</strong>
        {errors.map(this.renderError)}
      </div>
    )
  }
  render() {
    const { username, password, hasAttemptedLogin } = this.state
    const { errors } = this.props
    const hasErrors = errors.length > 0
    const noUsername = username.length === 0
    const noPassword = password.length === 0

    return (
      <form onSubmit={this.tryLogin}>
        <div className={css(form.row)}>
          <input
            type="text"
            id="username"
            size="14"
            className={css(
              textInput.default,
              (hasAttemptedLogin && noUsername) && textInput.error
            )}
            placeholder="Username"
            value={username}
            onChange={this.setField('username')} />
        </div>
        <div className={css(form.row)}>
          <input
            type="password"
            id="password"
            size="14"
            className={css(
              textInput.default,
              (hasAttemptedLogin && noPassword) && textInput.error
            )}
            placeholder="Password"
            value={password}
            onChange={this.setField('password')} />
        </div>
        <button className={css(button.default)}>
          Login
        </button>
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

