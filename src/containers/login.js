import { connect } from 'react-redux'
import Login from '../components/login'
import { login } from '../actions/auth'

function mapState(state) {
  return {
    errors: state.auth.errors
  }
}

const mapActions = {
  onSubmit: login
}

export default connect(mapState, mapActions)(Login)

