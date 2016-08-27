export function searchFor(term) {
  const needle = term.toLowerCase()
  return (str) => {
    const haystack = str.toLowerCase()
    return haystack.indexOf(needle) >= 0
  }
}

