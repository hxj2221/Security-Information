import {
    request
} from './request'

// 角色数据
export function getrole(a) {
    return request({
        method: 'get',
        url: 'api/part/authgroup',
        data: a
    })
}