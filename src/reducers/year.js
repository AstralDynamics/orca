import { YEAR } from '../constants/year';

export default function(year=1, action) {
  switch(action.type) {
    case YEAR:
      return action.year;
    default:
      return year;
  }
}
