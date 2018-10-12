import React from 'react';
import {connect} from 'react-redux';
import TestForm from './TestForm';
import { startAddTest } from '../actions/testActions';


class AddTestPage extends React.Component {
    
    
    
    
    
    render() {
        return (
            <div>
            This is from my add test page
            <TestForm formSubmit={this.props.formSubmit} />
            </div>
        )
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        formSubmit: (test) => {
            dispatch(startAddTest(test))
        }
    }
}



export default connect(undefined, mapDispatchToProps)(AddTestPage);

