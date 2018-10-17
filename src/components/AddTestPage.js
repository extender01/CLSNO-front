import React from 'react';
import {connect} from 'react-redux';
import TestForm from './TestForm';
import { startAddTest } from '../actions/testActions';


class AddTestPage extends React.Component {
    
    
    
    
    
    render() {
        return (
            <div>
            This is from my add test page
            {this.props.error &&   <p>{this.props.error.message}</p>}

            
            <TestForm formSubmit={this.props.startAddTest} />
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        loading: state.labTests.loading,
        error: state.labTests.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddTest: (test) => {
            dispatch(startAddTest(test))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddTestPage);

