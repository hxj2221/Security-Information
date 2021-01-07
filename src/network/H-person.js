import {
    request
} from './request'

export function changeinfor(a) {
    return request({
        method: 'post',
        url: '1A02/1ffc4f9d5a09b291ac2d9d223b8aa026',
        data: a
    })
}
export function personxq(a) {
    return request({
        method: 'get',
        url: '/1A01/fa08debc211b13368b9a5caaed051c65',
        data: a
    })
}