export function any(...funcs) {
  return (val) => {
    return funcs.some(f => f(val))
  }
}

export function all(...funcs) {
  return (val) => {
    return funcs.every(f => f(val))
  }
}
