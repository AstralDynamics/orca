import React from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';

import Tray from '../components/tray';
import Search from '../components/search';
import CompetencyList from '../components/competency-list';
import { YearSelector } from '../components/selector';

import { searchFor } from '../actions/search';
import { selectYear } from '../actions/year';

import typography from '../styles/typography';
import plural from '../utils/plural';

export function ResultsIndicator({ results, query }) {
  const pluralizedResults = plural('result', results.length);
  if(query.length === 0) return null;

  return (
    <p>
      {pluralizedResults} found for <strong>"{query}"</strong>.
    </p>
  );
}

export function StudentDashboard(props) {
  const {
    competencies, search, searchFor, year, selectYear
  } = props;

  const results = competencies
    .filter(comp => comp.year === year)
    .filter(comp => {
      const haystack = comp.title.trim().toLowerCase();
      const needle = search.trim().toLowerCase();
      return haystack.indexOf(needle) >= 0;
    });

  return (
    <div>
      <Search
        onChange={searchFor}
        placeholder="Search for competencies" />

      <center className={css(typography.hintText)}>
        <ResultsIndicator results={results} query={search} />
      </center>

      <CompetencyList competencies={results} />
      <Tray>
        <YearSelector onSelect={selectYear} />
      </Tray>
    </div>
  );
}

export function stateToProps(state) {
  return {
    competencies: state.competencies,
    search: state.search,
    year: state.year
  };
}

export function dispatchToProps(dispatch) {
  return {
    searchFor: query => dispatch(searchFor(query)),
    selectYear: year => dispatch(selectYear(year))
  };
}

export default connect(stateToProps, dispatchToProps)(StudentDashboard);

