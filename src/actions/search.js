import { SEARCH } from '../constants/search';

export function search(query) {
  return { type: SEARCH, query };
}

