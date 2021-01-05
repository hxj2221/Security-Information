import {
    request
} from './request'

// 新增员工
export function Aepyee(a) {
    return request({
        method: 'post',
        url: 'api/Employees/add',
        data: a
    })
}
