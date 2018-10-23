import React from 'react';


export default class CredentialsForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nick: '',
            password: ''
        };
    };

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => {
            return {[name]: value}
        });
        console.log(name, value);

    };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.formSubmit({nick: this.state.nick, password: this.state.password})

    };


    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' name='nick' placeholder='Prihlasovaci jmeno' value={this.state.nick} onChange={this.onChange}/>
                <input type='password' name='password' placeholder='Heslo' value={this.state.password} onChange={this.onChange} />
                    <button>LOGIN</button>
                </form>

                
            </div>
        )
    }
};