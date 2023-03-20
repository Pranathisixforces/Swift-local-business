const initialState = {
    loginToken: '',
    userId:''
}

const authReducers = (state = initialState, action) => {
   switch (action.type) {
       case 'LOGIN_TOKEN':
            return ({ ...state, loginToken: action.payload })
       case 'USERID' :
             return ({...state, userId: action.payload})
        default:
            return state;
    }

}

export default authReducers;

