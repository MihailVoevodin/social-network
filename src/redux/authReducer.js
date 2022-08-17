import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const POST_ERROR = 'POST_ERROR';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    postErrorText: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data,
            }
        case POST_ERROR: 
            return {
                ...state,
                postErrorText: action.postErrorText,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}

export const postError = (postErrorText) => {
    return {
        type: POST_ERROR,
        postErrorText
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        // this.props.toggleIsFetching(true);
        return authAPI.getAuth().then(response => {
            const {id, email, login} = response.data
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login, true));
            }
            // this.props.toggleIsFetching(false);
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
                dispatch(postError(null))
            } else {
                const postErrorText = response.messages[0]
                dispatch(postError(postErrorText))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;