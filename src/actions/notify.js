import { NOTIFY } from '../constants/notify'

export function notify(text, options={}) {
  const settings = {
    duration: 2000,
    theme: '',
    ...options
  }

  return {
    type: NOTIFY,
    message: {
      ...settings,
      text,
      expired: false
    }
  }
}

