import { ADD_EVENT, REMOVE_EVENT } from '@/store/mutations'

const state = {
  history: []
}

const mutations = {
  [ADD_EVENT]: (state, item) => {
    const event = {
      id: item.id,
      name: item.name,
      action: 'add',
      date: new Date()
    }
    state.history.push(event)
  },
  [REMOVE_EVENT]: (state, item) => {
    const event = {
      id: item.id,
      name: item.name,
      action: 'remove',
      date: new Date()
    }
    state.history.push(event)
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
