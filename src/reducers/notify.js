import { NOTIFY } from '../constants/notify'

function notifyReducer(notification=null, action) {
  switch(action.type) {
    case NOTIFY:
      return action.message
    default:
      return notification
  }
}

export default notifyReducer

