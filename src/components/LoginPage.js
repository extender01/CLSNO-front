import React from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';



export default class LoginPage extends React.Component {
    
    onSubmit = (e) => {
        e.preventDefault();
        
        axios({
            method: 'post',
            url: 'http://localhost:3000' + '/login',
            data: {
              nick: 'Vita',
              password: 'bla'
            }}
          ).then((result) => {
              //console.log(result.headers['x-auth'])
              //localStorage.setItem('x-auth', result.headers['x-auth']);
              //let jwt = 'x-auth='.concat(result.headers['x-auth'])
              let jwt =Cookie.set('x-auth', result.headers['x-auth']);
             
              //console.log('cooky', document.cookie);
              
              console.log(jwt);
              
          }).catch((e) => {
              console.log('neco se pokazilo,', e);
              
          });

    };

    
    render() {
        return (
            <div>Ahoj
            <form onSubmit={this.onSubmit}>
                <button>LOGIN</button>
            </form>
            </div>
        )
    }
};



