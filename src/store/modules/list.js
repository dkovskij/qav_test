import { getList } from "@/api/list"
// import { cloneDeep } from 'lodash'
import { SET_LIST, SET_LOADING, MOVE_ITEM, MOVE_BACK, SORT_LIST, SAVE_ORIGINAL_LIST, SET_QUERY } from '@/store/mutations'

const state = {
  isLoading: false,
  list: [
    {
      id: 1,
      name: 'aaa',
      items: [
        {
          id: 23,
          name: 'bbb'
        }
      ]
    },
    {
      id: 5,
      name: 'sss',
      items: [
        {
          id: 55,
          name: 'vvv'
        }
      ]
    },
  ],
  originalList: [],
  movedList: [],
  query: ''
}

const mutations = {
  [SET_LOADING]: (state, loading) => {
    state.isLoading = loading
  },
  [SET_LIST]: (state, list) => {
    state.list = list
  },
  [MOVE_ITEM]: (state, item) => {
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i].id === item.id) {
        let moved = state.list.splice(state.list.indexOf(state.list[i]), 1)
        state.movedList.push(moved[0])
      }
    }
  },
  [MOVE_BACK]: (state, index) => {
    let moved = state.movedList.splice(index, 1)
    state.list.push(moved[0])
  },
  [SAVE_ORIGINAL_LIST]: (state) => {
    state.originalList = state.list
  },
  [SORT_LIST]: (state, str) => {
    if (str) {
      let sorted = state.list.filter(el => el.name.toLowerCase().includes(str.toLowerCase()))
      state.list = sorted
    }
  },
  [SET_QUERY]: (state, query) => {
    state.query = query
  }
}

const actions = {
  async getList({ commit }) {
    commit('SET_LOADING', true)
    const res = await getList(3)
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
