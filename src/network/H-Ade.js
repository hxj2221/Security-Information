import { request } from './request'

export function AdeList() {
    return request({
        method: 'get',
        url: 'api/bad/lists',
    })
}