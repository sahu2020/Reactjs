const initialState = {
    userData:null
}

export default function rootReducer(state =initialState,action){
    switch (action.type) {
        case LOGIN_CHANGE:
            return {
                ...state,
                userData:action.payload,
                userRef:action.userRef
            }

    
        default:
            return state;
    }
}