import { getList } from "@/api/list"
import { SET_LIST, SET_LOADING, MOVE_ITEM, MOVE_BACK, SORT_LIST, SAVE_ORIGINAL_LIST, SET_QUERY } from '@/store/mutations'

const state = {
  isLoading: true,
  list: [
    {
      id: 25,
      name: 'aa aa aa cc',
      items: [
        {
          id: 45,
          name: 'bba aab'
        }
      ]
    },
    {
      id: 1,
      name: 'aa aa cc',
      items: [
        {
          id: 23,
          name: 'bb bb ba'
        }
      ]
    },
    {
      id: 5,
      name: 'ss sf ff',
      items: [
        {
          id: 55,
          name: 'vv vv vz'
        }
      ]
    },
    {
      id: 35,
      name: 'ss ss sf',
      items: [
        {
          id: 15,
          name: 'ff ff fs'
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
    let payload = {
      token: "fORM-fAa0fo_wzbUz2eMmg",
      data: {
        id: 'numberInt|1,100',
        name: 'name',
        _repeat: 100
      }
  };
    const res = await getList(payload)
    commit('SET_LIST', res)
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
