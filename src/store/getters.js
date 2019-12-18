const getters = {
  filteredList: state => {
    let str = state.list.query.toLowerCase()
    let filtered = state.list.list.filter(el => {
      if (str === '') {
        return true
      } else {
        let matched;
        el.items.forEach(el => {
          if (el.name.toLowerCase().indexOf(str) !== -1) {
            matched = true
          }
        })
        if (!matched) {
          matched = el.name.toLowerCase().indexOf(str) > -1
        }
        return matched
      }
    })

    let count = function(name) {
      let pos = -1;
      let count = 0
      while ((pos = name.toLowerCase().indexOf(str, pos + 1)) !== -1) {
        count++
      }
      return count
    }

    filtered.sort((a, b) => {
      let countA = null
      let countB = null
      if (str !== '') {
        countA = count(a.name)
        countB = count(b.name)
        a.items.forEach(el => {
          countA += count(el.name)
        })
        b.items.forEach(el => {
          countB += count(el.name)
        })
      }
      if (countA > countB) {
        return -1
      } else {
        return 1
      }
    })
    return filtered
  }
}
export default getters
