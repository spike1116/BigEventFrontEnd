import request from '@/utils/request.js'

export const userRegisterService = (registerData) => {
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    return request.post('/user/register', params)
}

export const userLoginService = (registerData) => {
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    return request.post('/user/login', params)
}

//获取用户详细信息
export const userInfoService = () => {
    return request.get('/user/userInfo')
}

export const updateUserInfoService = (userInfo) => {
    return request.put('user/update', userInfo)
}

//修改头像
export const userAvatarUpdateService = (avatarUrl) => {
    let params = new URLSearchParams();
    params.append('path', avatarUrl)
    return request.patch('/user/updateAvatar', params)
}