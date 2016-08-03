import { SEARCH } from '../constants/search';

export function searchFor(query) {
  return { type: SEARCH, query };
}

