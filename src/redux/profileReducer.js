import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPLOAD_PHOTO = 'UPLOAD_PHOTO'

let initialState = {
    posts: [
        {id: 1, post: "It's my first post", likesCount: 13},
        {id: 2, post: "Hi, how are you?", likesCount: 12},
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
            const newPost = {
                id: 3,
                post: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }
        case UPLOAD_PHOTO: 
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const uploadPhotoSuccess = (photos) => {
    return {
        type: UPLOAD_PHOTO,
        photos
    }
}


export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                console.log(response.data)
                dispatch(setStatus(status));
            }
        })
    }
}

export const uploadPhoto = (photo) => {
    return (dispatch) => {
        profileAPI.uploadPhoto(photo).then(response => {
            if (response.data.resultCode === 0) {
                console.log(response.data)
                dispatch(uploadPhotoSuccess(response.data.data.photos));
            }
        })
    }
}

export const saveProfile = (photo) => {
    return (dispatch) => {
        profileAPI.uploadPhoto(photo).then(response => {
            if (response.data.resultCode === 0) {
                console.log(response.data)
                dispatch(uploadPhotoSuccess(response.data.data.photos));
            }
        })
    }
}

export default profileReducer;