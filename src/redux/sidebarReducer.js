
let initialState = {
    friends: [
        { id: 1, name: 'Alex', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
        { id: 2, name: 'John', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
        { id: 3, name: 'Sofia', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
        { id: 4, name: 'Elizabeth', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
        { id: 5, name: 'Mikhail', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'},
    ]
}

const sidebarReducer = (state = initialState) => {
    return state;
}

export default sidebarReducer;