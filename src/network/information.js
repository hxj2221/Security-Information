import {
    request
} from './request'

export function changeinfor(a) {
    return request({
        method: 'post',
        //header: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYwOTczOTc3OSwiZXhwIjoxNjA5ODI2MTc5LCJqdGkiOiIwOTYzNmZhNzkxNTBlMTQ1YTNjOGMzYjBkMGE5OThmNCJ9.okk9hXhlwTF6cu7CKcNbIx_5VZznoQ0NKWrYf047_U8",
        url: '1A02/1ffc4f9d5a09b291ac2d9d223b8aa026',
        data: a
    })
}