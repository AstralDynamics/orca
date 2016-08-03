import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { white, primary } from '../constants/styles';

export const styles = StyleSheet.create({
  container: {
    background: white
  },
  search: {
    fontSize: 20,
    border: 0,
    padding: 10,
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'center',
    outline: 'none',
    ':focus': {
      boxShadow: `inset 0 -2px ${primary}`
    }
  }
});

export default class Search extends Component {
  constructor() {
    super();
    this.state = { query: '' };
  }
  onChange(event) {
    const { value } = event.target;
    this.props.onChange(value);
    this.setState({ query: value });
  }
  onSubmit(event) {
    this.props.onSubmit(this.state.query);
    event.preventDefault();
    return false;
  }
  render() {
    const { placeholder } = this.props;

    return (
      <div className={css(styles.container)}>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            className={css(styles.search)}
            value={this.state.query}
            placeholder={placeholder}
            onChange={e => this.onChange(e)}/>
        </form>
      </div>
    );
  }
}

Search.defaultProps = {
  placeholder: 'Search'
};

