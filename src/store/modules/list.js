import { getList } from "@/api/list"

import { SET_LIST, SET_LOADING, MOVE_ITEM, MOVE_BACK } from '@/store/mutations'

const state = {
  isLoading: false,
  list: [],
  movedList: []
}

const mutations = {
  [SET_LOADING]: (state, loading) => {
    state.isLoading = loading
  },
  [SET_LIST]: (state, list) => {
    state.list = list
  },
  [MOVE_ITEM]: (state, index) => {
    let moved = state.list.splice(index, 1)
    state.movedList.push(moved[0])
  },
  [MOVE_BACK]: (state, index) => {
    let moved = state.movedList.splice(index, 1)
    state.list.push(moved[0])
  }
}

const actions = {
  async getList({ commit }) {
    commit('SET_LOADING', true)
    const res = await getList(100)
    commit('SET_LIST', res.results)
    commit('SET_LOADING', false)
  },
  moveItem({ commit }, index) {
    commit('MOVE_ITEM', index)
  },
  moveBack({ commit }, index) {
    commit('MOVE_BACK', index)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
