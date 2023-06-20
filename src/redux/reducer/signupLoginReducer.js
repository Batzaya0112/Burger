import { act } from "react-dom/test-utils";

const initialState = {
    saving: false,
    logginIn: false,
    token: null,
    userId: null,
    firebaseError: null,
    firebaseErrorCode: null
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SIGNUP_USER_START':
            return {
                ...state,
                saving: true
            };
        case 'SIGNUP_USER_SUCCESS':
            return {
                ...state,
                saving: false,
                token: action.firebaseResultData.idToken,
                userId: action.firebaseResultData.localId
            };
        case 'SIGNUP_USER_ERROR':
            return {
                ...state,
                saving: false,
                firebaseError: action.error.response.data.error.message
            };
        case 'LOGIN_USER_START':
            return {
                ...state,
                logginIn: true
            };
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                logginIn: false,
                token: action.firebaseResultData.idToken,
                userId: action.firebaseResultData.localId
            };
        case 'LOGIN_USER_ERROR':
            return {
                ...state,
                logginIn: false,
                firebaseErrorCode: action.error.response.data.error.message,
                firebaseError: action.error.response.data.error.message
            };
    default: 
            return state;
    }
};
export default reducer