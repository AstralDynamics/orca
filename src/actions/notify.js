import { NOTIFY } from '../constants/notify'

export function notify(text, { duration=2000 }={}) {
  return {
    type: NOTIFY,
    message: {
      text,
      duration,
      expired: false
    }
  }
}

