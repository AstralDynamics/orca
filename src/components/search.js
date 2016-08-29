
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

/**
 * <Search /> components will call `onSearch` prop any time the search
 * query changes.
 */
class Search extends React.Component {
  constructor() {
    super()
    this.state = { query: '' }
  }
  setQuery = (event) => {
    const query = event.target.value
    this.setState({ query })
    this.props.onSearch(query)
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
  placeholder: 'Search',
  onSearch() {
    console.warn('No `onSearch` provided for <Search />')
  }
}

export default Search

