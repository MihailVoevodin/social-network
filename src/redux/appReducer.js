import { getAuthUserData } from "./authReducer";

const INITIALIZING = 'INITIALIZING';

let initialState = {
    initialize: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING: 
            return {
                ...state,
                initialize: true,
            }
        default:
            return state;
    }
}

const initializingSuccess = () => {
    return {
        type: INITIALIZING,
    }
}

export const initializingApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    
    promise.then(() => {
        dispatch(initializingSuccess())
    })
}

export default appReducer;