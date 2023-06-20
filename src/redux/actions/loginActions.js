import axios from "axios";
export const loginUser = (email, password) => {
    return function(dispatch){
        dispatch(loginUserStart());
        const data = {
            email, 
            password, 
            returnSecureToken: true
        };
        axios
            .post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSQQNHIuYHoTrD50kH594vkXv7hC1Acng", 
            data
            )
            .then(result => {
                dispatch(loginUserSuccess(result.data));
            })
            .catch(err => {
                console.log("error ", err);
                dispatch(loginUserError(err));
            })
    }
};
export const loginUserStart = () => {
    return{
        type: "LOGIN_USER_START"
    };
};
export const loginUserSuccess = (firebaseResultData) => {
    return{
        type: "LOGIN_USER_SUCCESS",
        firebaseResultData
    };
};
export const loginUserError = (error) => {
    return{
        type: "LOGIN_USER_ERROR",
        error
    };
};