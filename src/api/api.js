import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "3da65974-17d2-4e02-b21c-86f4ab8bd56a"
    }
})


export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}

export const profileAPI = {
    
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return instance.put('profile/status', {status})
    },
    uploadPhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put('profile/photo', formData, {headers: { "Content-Type": "multipart/form-data" }},)
    },
    saveProfile(profile) {
        debugger
        return instance.put('profile', profile)
    }
}

