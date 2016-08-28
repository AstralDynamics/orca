import { connect } from 'react-redux'
import Notifications from '../components/notifications'
import { notify } from '../actions/notify'

function mapState(state) {
  return {
    notification: state.notify
  }
}

const mapActions = {
  notify
}

export default connect(mapState, mapActions)(Notifications)

