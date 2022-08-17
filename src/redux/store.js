import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "It's my first post", likesCount: 13},
                {id: 2, post: "Hi, how are you?", likesCount: 12},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            ],
            newMessageText: '', 
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Alex', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
                { id: 2, name: 'John', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
                { id: 3, name: 'Sofia', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
                { id: 4, name: 'Elizabeth', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
                { id: 5, name: 'Mikhail', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

 


export default store;
window.store = store;