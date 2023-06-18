import axios from "axios";
export const signupUser = (email, password) => {
    return function(dispatch){
        dispatch(signupUserStart());
        const data = {
            email, 
            password, 
            returnSecureToken: true
        };
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSQQNHIuYHoTrD50kH594vkXv7hC1Acng", 
                    data
        )
        .then(result => {
            dispatch(signupUserSuccess(result.data));
        })
        .catch(err => {
            console.log("error ", err);
            dispatch(signupUserError(err));
        })
    }
};
export const signupUserStart = () => {
    return{
        type: "SIGNUP_USER_START"
    };
};
export const signupUserSuccess = (firebaseResultData) => {
    console.log("signupUserSuccess =========> ",firebaseResultData);
    return{
        type: "SIGNUP_USER_SUCCESS",
        firebaseResultData
    };
};
export const signupUserError = (error) => {
    console.log("signupUserError =========> ",error);
    return{
        type: "SIGNUP_USER_ERROR",
        error
    };
};