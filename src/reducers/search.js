import { SEARCH } from '../constants/search';

export default function(search='', action) {
  switch(action.type) {
    case SEARCH:
      return action.query;
    default:
      return search;
  }
}

