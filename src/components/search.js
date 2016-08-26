
import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { textInput } from '../styles/input'

const styles = StyleSheet.create({
  search: {
    padding: '.25em',
    boxSizing: 'border-box',
    borderBottom: 0,
    fontSize: '1.5rem',
    width: '100%',
    textAlign: 'center'
  }
})

class Search extends React.Component {
  constructor() {
    super()
    this.state = { query: '' }
    this.setQuery = this.setQuery.bind(this)
  }
  setQuery(event) {
    this.setState({ query: event.target.value })
  }
  render() {
    const { placeholder } = this.props
    const { query } = this.state

    return (
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={this.setQuery}
        className={css(textInput.default, styles.search)} />
    )
  }
}

Search.defaultProps = {
  placeholder: 'Search'
}

export default Search

