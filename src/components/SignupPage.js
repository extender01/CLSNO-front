import React from 'react';

export default class SignupPage extends React.Component {
    
    onSubmit = (e) => {
        e.preventDefault();
        
    };
    
    render() {
        return (
            <div>
            <p>Sign up form</p>
            <form>
                <input type='text' placeholder='nick'/>
                <input type='text' placeholder='password' />
                <button>SIGNUP</button>
            </form>
            </div>
        )
    };
};
