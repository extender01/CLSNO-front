import axios from 'axios';
import Cookies from 'js-cookie';


//========================LOGIN==========================================================

const loginBegin = () => ({type: "LOGIN_BEGIN"});
const loginFailure = (error = null) => ({type: "LOGIN_FAILURE", payload: {error}});
const loginSuccess = (user = {}) => {
    return {
        type: "LOGIN_SUCCESS",
        user: {
            _id: user._id,
            nick: user.nick
        }
    };
};

export const startLogin = (credentials) => {
    // document.cookie = 'x-auth=' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmM1YTk3MTE0NzBkMDFkZmNkZjljNzAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5NjkxMTM3fQ.JCkFdUdxI8XRJlVRyP0q6hz7RDubNYsG3JzvoNTfYbw' +  ';expires = Mon, 1 Jan 2007 12:00:00 UTC; path=/';
   console.log(Cookies.get());

    return (dispatch) => {
        dispatch(loginBegin());

        axios({
            method: 'post',
            url: 'http://localhost:3000' + '/login',
            data: {
              nick: credentials.nick,
              password: credentials.password
            }}
          ).then((result) => {
             Cookies.set('x-auth', result.headers['x-auth']);
            console.log(Cookies.get());
            
              
             dispatch(loginSuccess(result.data));
              
          }).catch((e) => {
              console.log('neco se pokazilo,', e);
              dispatch(loginFailure(e))
          });
    }
};


//============================LOGOUT======================================================
const logoutBegin = () => ({type: "LOGOUT_BEGIN"});

const logoutSuccess = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    };
};

export const startLogout = () => {
    return (dispatch) => {
        dispatch(logoutBegin());

        axios({
            method: 'delete',
            url: 'http://localhost:3000' + '/logout',
            headers: {
                'x-auth': Cookies.get('x-auth')
            }    
    

        }).then((result) => {
            console.log('uspesne smazano');
            Cookies.remove('x-auth');
            dispatch(logoutSuccess())
            
        })
    }
};



//============================SIGNUP==========================================================

const signupBegin = () => ({type: 'SIGNUP_BEGIN'});
const signupFailure = (error = null) => ({type: 'SIGNUP_FAILURE', payload: {error}});
const signupSuccess = (user = {}) => {
    return {
        type: 'SIGNUP_SUCCESS'
        
    }
}
