const getters = {
  filteredList: state => {
    return state.list.list.filter(el => {
      if (state.list.query === '') {
        return true
      } else {
        let matched;
        el.items.forEach(el => {
          if (el.name.indexOf(state.list.query) !== -1) {
            matched = true
          }
        })
        if (!matched) {
          matched = el.name.indexOf(state.list.query) > -1
        }
        return matched
      }
    })
  }
}
export default getters
