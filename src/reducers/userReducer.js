const userReducerDefaultState = {
    user: {
        '_id': '',
        'nick': ''
    },
    isLogged: false,
    loading: false,
    error: null

};

//DODELAT LOGOUT FAILURE A PRENEST TLACITKO LOGOUT NA HEADER NEBO NEKAM

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOGIN_BEGIN':
            return {...state, isLogged: false, loading: true, error: null}
        case 'LOGIN_FAILURE':
            console.log('bzl failure');
            return {...state, isLogged: false, loading: false, error: action.payload.error}
        case 'LOGIN_SUCCESS':
            return {...state, isLogged: true, loading: false, error: null, user: action.user}

        case 'LOGOUT_BEGIN':
            return {...state, loading: true, error: null}
        case 'LOGOUT_SUCCESS':
            return {...state, user: {}, isLogged: false, loading: false, error: null}

        case "SIGNUP_BEGIN":
            return {...state, isLogged: false, loading: true, error: null}
        case 'SIGNUP_FAILURE':
            return state
        case 'SIGNUP_SUCCESS':
            return {...state, isLogged: true, loading: false, error: null, user: action.user}



        default:
            return state;
    }
};

export default userReducer;