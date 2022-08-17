const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi'},
        { id: 2, message: 'How are you?'},
        { id: 3, message: 'Go to the cinema today'},
        { id: 4, message: 'With my friends'},
    ],  
    dialogs: [
        { id: 1, name: 'Alex'},
        { id: 2, name: 'John'},
        { id: 3, name: 'Sofia'},
        { id: 4, name: 'Elizabeth'},
        { id: 5, name: 'Mikhail'},
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
}

export default dialogsReducer;