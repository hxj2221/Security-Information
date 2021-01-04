import {
    request
} from './request'

// 忘记密码
export function FPW(a) {
    return request({
        method: 'post',
        url: '/1A09/f660315fff2360d141b550d373ca46c4',
        data: a
    })
}

// 发送手机验证码
export function PCode(i) {
    return request({
        method: 'post',
        url: '1A05/e864b91eb6b1918372c2b1c7b2fb0475',
        data: i
    })
}