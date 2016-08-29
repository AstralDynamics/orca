import { connect } from 'react-redux'
import { notify } from '../actions/notify'
import { saveStudent, loadStudent } from '../actions/students'
import StudentProfile from '../components/student-profile'

function mapState(state) {
  console.log(state)
  return {
    staffId: state.auth.user.name
  }
}

const mapActions = {
  notify, saveStudent, loadStudent
}

export default connect(mapState, mapActions)(StudentProfile)
