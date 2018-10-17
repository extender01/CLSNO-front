import React from 'react';
import { connect } from 'react-redux';
import {startAddTest} from '../actions/testActions';



export default class TestForm extends React.Component {
   
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

      
        console.log('submit starts, calling formSubmit defined on AddTestPageComponent with object created from form data, formSubmit calls dispatch(startAddTest(...) via mapStateToProps');
        
        this.props.formSubmit({name: this.state.name, where: 'Krnov fixne'})
    };



    render() {
        return (
            <div>
                <p>This is from test form</p>
                <form onSubmit={this.onSubmit}>
                    <input type='text' value={this.state.name} onChange={this.onChange} />
                    <button>Submitvoe</button>
                </form>

            </div>
        )
    };
};








// const mapDispatchToProps = (dispatch) => {
//     return {
//         startAddTest: (test) => {
//             dispatch(startAddTest(test))
//         }
//     };
// };

// export default connect(undefined, mapDispatchToProps)(TestForm);