import {
  request
} from './request'

export function Login(a) {
  return request({
    method: 'post',
    url: '/api/login/login',
    data: a
  })
}