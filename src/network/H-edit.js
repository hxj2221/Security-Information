import {
    request
} from './request'

// 权限
export function editpower(a) {
    return request({
        method: 'get',
        url: 'api/auths/get_rules',
        data: a
    })
}

// 请求权限
export function addpower(a) {
    return request({
        method: 'get',
        url: 'api/auths/rule_add',
        data: a
    })
}

// 修改权限
export function savepower(a) {
    return request({
        method: 'post',
        url: 'api/auths/rule_add',
        data: a
    })
}