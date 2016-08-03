import { YEAR } from '../constants/year';

export function selectYear(year) {
  return { type: YEAR, year };
}
