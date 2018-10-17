import axios from 'axios';
import Cookie from 'js-cookie';


const url = 'http://localhost:3000';


//=======================  ADD_TEST

const addTestBegin = () => ({type: 'ADD_TEST_BEGIN'});
const addTestFailure = (error = null) => ({type: 'ADD_TEST_FAILURE', payload: {error}});
const addTestSuccess = (test = {}) => {
    
    return {
        type: "ADD_TEST_SUCCESS",
        addedTest: {
            _id: test._id,
            name: test.name,
            where: test.where
        }
    };
};

  

/* normally dispatch function is called with object, when it is called with function as an argument
it is sensed by redux thunk which executes that function and appends dispatch function as an argument,
so we can dispatch action with plain object in this startAddTest function (appart from dispatch it can
also append getstate as second argument) */

/* SCHEME:  on form submit TestForm component calls method from AddTestPage (with args from form)via props...
..this method calls startAddTest (imported) but it calls it as argument via dispatch ...
..this activates redux thunk which invokes that method and via it, final dispatch of action object is executed */

                            
export const startAddTest = (test) => {
    return (dispatch) => {
        console.log('startAddTest started, now dispatching addTestBegin');
        dispatch(addTestBegin());
        //this will get data from result of axios POST call (what is saved to mongodb) and is used to update redux via dispatch
        let testFromMongoToRedux = {};
        console.log('starting axios POST request to send new test to db');
        
        axios({
            method: 'post',
            url: url + '/addtest',
            data: {
              name: test.name,
              where: 'Flintstone'
            },
            headers: {'x-auth': Cookie.get('x-auth')}
          }).then((result) => {
              
                testFromMongoToRedux = {
                  name: result.data.name,
                  where: result.data.where,
                  _id: result.data._id
                };
              
              dispatch(addTestSuccess(testFromMongoToRedux));
              console.log('successfully added to db and dispatched object with data from db to be saved to redux store');
              

          }).catch((e) => {
              console.log('something went wrong when saving data to db', e)
              //error from axios request is sent action object, then reducer saves error to store and component displays error via mapStateToProps
              dispatch(addTestFailure(e))
          })
    }
};







//==================================SHOW ALL TESTS

const loadTestsBegin = () => ({type: "LOAD_TESTS_BEGIN"});
const loadTestFailure = (error = null) => ({type: "LOAD_TESTS_FAILURE", payload: {error}});
const loadTestsSuccess = (tests = []) => {
    return {
        type: 'LOAD_TESTS_SUCCESS',
        allTests: tests
    };
};

export const startLoadTests = () => {
    return (dispatch) => {
    
    dispatch(loadTestsBegin());
    axios.get(url + '/').then((result) => {
          
          console.log(result.data);
          dispatch(loadTestsSuccess(result.data))
    
            //this.props.getTestsToRedux(result.data);
        }).catch((e) => {
            dispatch(loadTestFailure())
            console.log('error pri loadovani testu', e);
            
        });
    }
};





           
            
        
    
