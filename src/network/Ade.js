import { request } from './request'

// 不良事件列表
export function AdeList() {
    return request({
        method: 'get',
        url: '/api/bad/lists',
    })
}

// 不良类型
export function badType() {
    return request({
        method: 'get',
        url: '/api/bad/choice_type'
    })
}

// 轻重程度
export function Weight() {
    return request({
        method: 'get',
        url: '/api/bad/choice_weight'
    })
}

// 添加不良
export function Add(a) {
    return request({
        method: 'post',
        url: '/api/bad/bad_add',
        data: a
    })
}