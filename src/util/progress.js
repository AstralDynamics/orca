import { NO_PROGRESS, PARTIAL_PROGRESS, COMPLETE } from '../constants/progress'

export function cycleProgress(progress) {
  switch(progress) {
    case NO_PROGRESS: return PARTIAL_PROGRESS
    case PARTIAL_PROGRESS: return COMPLETE
    case COMPLETE: return NO_PROGRESS
    default: return NO_PROGRESS
  }
}
