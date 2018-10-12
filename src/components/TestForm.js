import React from 'react';
import { connect } from 'react-redux';
import {startAddTest} from '../actions/testActions';



class TestForm extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    };

    onChange = (e) => {
        const hodnota = e.target.value
        this.setState(() => {
            return {name: hodnota}
        });
    };
   
    onSubmit = (e) => {
        e.preventDefault();
        this.props.formSubmit({name: this.state.name})
    };



    render() {
        return (
            <div>
                <p>This is from test form</p>
                <form onSubmit={this.onSubmit}>
                    <input type='text' value={this.state.nazev} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    };
};








const mapDispatchToProps = (dispatch) => {
    return {
        startAddTest: (test) => {
            dispatch(startAddTest(test))
        }
    };
};

export default connect(undefined, mapDispatchToProps)(TestForm);