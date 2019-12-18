import { USERS } from '@/utils/request'

export function getList(data) {
  return USERS({
    url: '/q',
    method: 'post',
    data
  })
}
