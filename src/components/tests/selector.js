import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';

import Selector, { YearSelector, styles} from '../selector';

function hasClass(wrapper, className) {
  const haystack = wrapper.node.props.className || '';
  return haystack.indexOf(className) >= 0;
}

test('<Selector /> ', (assert) => {
  assert.plan(7);

  const selector = shallow(<Selector />);

  assert.equal(
    selector.find('a').length,
    0,
    'default selector should have no options'
  );


  const options = ['foo', 'bar', 'baz'];
  const populatedSelector = shallow(<Selector options={options} />);
  const renderedOptions = populatedSelector.find('a');

  assert.equal(
    renderedOptions.length,
    3,
    'should render anchor for each option prop'
  );

  assert.deepEqual(
    [renderedOptions.at(0).text(), renderedOptions.at(1).text(), renderedOptions.at(2).text()],
    ['foo', 'bar', 'baz'],
    'should display text from props in correct order'
  );

  assert.deepEqual(
    [hasClass(renderedOptions.at(0).childAt(0), css(styles.selected)),
     hasClass(renderedOptions.at(1).childAt(0), css(styles.selected)),
     hasClass(renderedOptions.at(2).childAt(0), css(styles.selected))],
    [true, false, false],
    'only the first option should be selected'
  );


  let selectedIndex = 0;
  const onSelect = (index) => selectedIndex = index;
  const statefulSelector = shallow(
    <Selector options={options} onSelect={onSelect} />
  );

  assert.equal(
    statefulSelector.state('index'),
    0,
    'default state should be 0'
  );

  statefulSelector.find('a').at(1).simulate('click');
  assert.equal(
    statefulSelector.state('index'),
    1,
    'state should change after click'
  );

  assert.equal(
    selectedIndex,
    1,
    'onSelect should have been called'
  );

});

