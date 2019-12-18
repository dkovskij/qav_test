import axios from 'axios'
import store from '@/store'

export const USERS = axios.create({
  baseURL: process.env.VUE_APP_DEV_API,
  timeout: 10000
})
USERS.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      store.commit('SET_ERROR', true)
      return Promise.reject(new Error('Error'))
    } else {
      return res
    }
  },
  error => {
    store.commit('SET_ERROR', true)
    console.log('err' + error)
    return Promise.reject(error)
  }
)
