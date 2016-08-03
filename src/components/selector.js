import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { primary, darkPrimary, white, lighten } from '../constants/styles';

export const styles = StyleSheet.create({
  selector: {
    display: 'flex',
    background: primary,
    color: white,
    fontSize: '1.2rem'
  },
  option: {
    flex: 1,
    textAlign: 'center',
    padding: '.5em',
    cursor: 'pointer'
  },
  pill: {
    borderRadius: '.2em',
    padding: '.5em 1em .3em 1em',
    display: 'inline-block',
    ':hover': {
      background: lighten
    }
  },
  selected: {
    background: darkPrimary
  }
});

export default class Selector extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }
  selectOption(index) {
    const { onSelect } = this.props;
    this.setState({ index });
    onSelect(index);
  }
  renderOption(option, index) {
    const isSelected = this.state.index === index;

    return (
      <a
        key={index}
        onClick={e => this.selectOption(index)}
        className={css(styles.option)}>
        <span className={css(styles.pill, isSelected && styles.selected)}>
          {option}
        </span>
      </a>
    );
  }
  render() {
    const { options } = this.props;

    return (
      <div className={css(styles.selector)}>
        {options.map((opt, index) => this.renderOption(opt, index))}
      </div>
    );
  }
}

Selector.defaultProps = {
  options: [],
  onSelect: function() {}
};

Selector.propTypes = {
  options: React.PropTypes.array,
  onSelect: React.PropTypes.func
};

export function YearSelector({ onSelect, years }) {
  const options = years.map(n => `Year ${n}`);

  return (
    <div>
      <Selector
        options={options}
        onSelect={index => onSelect(index + 1)} />
    </div>
  );
}

YearSelector.defaultProps = {
  years: [1, 2, 3]
};

YearSelector.propTypes = {
  years: React.PropTypes.arrayOf(React.PropTypes.number)
};

