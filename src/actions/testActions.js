import axios from 'axios';


export const addTest = (test = {}) => {
    //console.log('z action', test);
    
    return {
        type: "ADD_TEST",
        test: {
            name: test.name
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
//ahoj
export const startAddTest = (test) => {
    return (dispatch) => {
        
        console.log('zacal pokus o zapis do mongodb');
        
        axios({
            method: 'post',
            url: 'http://localhost:3000/addtest',
            data: {
              name: test.name,
              where: 'Flintstone'
            },
            headers: {'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTM4YjhkMmFhNDMzYzRiNWQ4YzUiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcxNTk5fQ.vvR2Xy_mgSdh-PdiVfU1PiiPf6wUB2I7n90TmMqZyjc'}
          }).then((result) => {
              console.log('uspesne zapsana data', result.data.name, result.data.where);
              console.log(test);
              
              dispatch(addTest(test));

          }).catch((e) => {console.log('neco se nepovedlo', e)})

         

        }

};
           
            
        
    
