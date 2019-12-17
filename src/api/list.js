import { USERS } from '@/utils/request'
import store from '../store'

export function getList(count) {
  return USERS({
    url: `/?key=${store.state.token}&ref=2goz5xw3&results=${count}`,
    method: 'get'
  })
}
