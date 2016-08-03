import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { search } from 'aphrodite';

import Search from '../search';

test('<Search /> ', (assert) => {
  assert.plan(3);

  let changeQuery = '';
  function onChange(query) {
    changeQuery = query;
  }

  let submitQuery = '';
  function onSubmit(query) {
    submitQuery = query;
  }

  const search = shallow(
    <Search onChange={onChange} onSubmit={onSubmit} />
  );

  search.find('input').simulate('change', {
    target: {
      value: 'foo'
    }
  });

  assert.equal(
    search.state('query'),
    'foo',
    'should update state after change event'
  );

  assert.equal(
    changeQuery,
    'foo',
    'should have called onChange prop'
  );

  search.find('form').simulate('submit', { preventDefault() {} });

  assert.equal(
    submitQuery,
    'foo',
    'should have called onSubmit prop'
  );
});

