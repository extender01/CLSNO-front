import axios from 'axios';
import Cookies from 'js-cookie';

const url = 'http://127.0.0.1:3000';


//========================LOGIN==========================================================

const loginBegin = () => ({type: "LOGIN_BEGIN"});
const loginFailure = (error = null) => ({type: "LOGIN_FAILURE", error: error});
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
            url: url + '/login',
            data: {
              nick: credentials.nick,
              password: credentials.password
            }}
          ).then((result) => {
            // Cookies.set('x-auth', result.headers['x-auth']);
           // console.log(Cookies.get());
            
              
             dispatch(loginSuccess(result.data));
              
          }).catch((e) => {
              console.log('neco se pokazilo,', e);
              dispatch(loginFailure(e))
          });
    }
};


//==================LOGGED USER==========================================================

//checks in db who is owner of x-auth cookie and sends back nick and id info (and stores them to redux)
const loggedUserBegin = () => ({type: "LOGGED_USER_BEGIN"});
const loggedUserFailure = (error = null) => ({type: 'LOGGED_USER_FAILURE', error: error});
export const loggedUserSuccess = (user) => {
    if (user) {
        return {
            type: 'LOGGED_USER_SUCCESS',
            user: {
                _id: user._id,
                nick: user.nick
                
            },
            
        }
    } 
};





export const startLoggedUser = () => {
    return (dispatch) => {
        dispatch(loggedUserBegin());

        
        axios({
            method: 'get',
            url: url + '/me'
           // headers: {
           //     'x-auth': Cookies.get('x-auth')
           // }
        }).then((result) => {
            console.log(result.data);
            dispatch(loggedUserSuccess(result.data));
        }).catch((e) => {
            dispatch(loggedUserFailure(e));
        });
            
        
    };
};





//============================LOGOUT======================================================
const logoutBegin = () => ({type: "LOGOUT_BEGIN"});
const logoutFailure = (error) => ({type: "LOGOUT_FAILURE", error: error});
const logoutSuccess = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    };
};

export const startLogout = () => {
    return (dispatch) => {
        dispatch(logoutBegin());
        console.log('zacina logout');
        
        axios({
            method: 'delete',
            url: url + '/logout',
            headers: {
                'x-auth': Cookies.get('x-auth')
            }    
    

        }).then(() => {
            console.log('uspesne smazano');
            Cookies.remove('x-auth');
            dispatch(logoutSuccess())
            
        }).catch((e) => {
            dispatch(logoutFailure(e))
        });
    }
};



//============================SIGNUP==========================================================

const signupBegin = () => ({type: 'SIGNUP_BEGIN'});
const signupFailure = (error = null) => ({type: 'SIGNUP_FAILURE', error: error});
const signupSuccess = (user = {}) => {
    return {
        type: 'SIGNUP_SUCCESS'
        
    }
}
