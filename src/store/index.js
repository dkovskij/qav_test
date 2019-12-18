import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  state: {
    // token RandomAPI
    token: 'DN7K-IQOR-D0WJ-OZY2',
    isError: false
  },
  mutations: {
    SET_ERROR: (state, error) => {
      state.isError = error
    }
  }
})

export default store
