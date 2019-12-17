import axios from 'axios'
// import store from '@/store'

export const USERS = axios.create({
  baseURL: process.env.VUE_APP_DEV_API,
  timeout: 10000
})
USERS.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {

      return Promise.reject(new Error('Error'))
    // } else if (!res.ok) {
      // Message({
      //   message: res.errors.join('\n') || 'Сервер вернул ошибку',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // return Promise.reject(
      //   new Error(res.errors.join('\n') || 'Сервер вернул ошибку')
      // )
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)

    return Promise.reject(error)
  }
)
