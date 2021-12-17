const initialState = {
    books : []
};

const bookListReducer = ( state = initialState , action ) => {
    switch(action.type) {
        case 'BOOK_LIST' : 
            return {
                ...state ,
                books : action.payload
            };
        default : 
            return state ; 
    }

}

export default bookListReducer ; 