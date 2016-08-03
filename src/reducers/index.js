import { combineReducers } from 'redux';

import competencies from './competencies';
import search from './search';
import year from './year';

export default combineReducers({
  competencies,
  search,
  year
});

