const bookidReducer = (state = "payload failed" , action) => {
    switch(action.type){
        case 'SET_BOOKID':
            return   {
               state : action.payload
            }
           
                 
        default:
            return state;     
    }

};

export default bookidReducer;