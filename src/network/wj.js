import {
    request
} from './request'

export function wjpwd(a) {
    return request({
        method: 'post',
        url: '/1A09/f660315fff2360d141b550d373ca46c4',
        data: a
    })
}