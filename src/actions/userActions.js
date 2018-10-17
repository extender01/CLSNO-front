import axios from 'axios';




const loginBegin = () => ({type: "LOGIN_BEGIN"});
const loginFailure = () => ({type: "LOGIN_FAILURE", payload: {error}});
const loginSuccess = (user = {}) => {
    return {
        type: "LOGIN_SUCCESS",
        user: {
            _id: user._id,
            nick: user.nick
        }
    };
};

export const startLogin = () => {
    return (dispatch) => {

    }
};
