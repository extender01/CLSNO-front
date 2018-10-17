import React from 'react';
import {fetchAndDispatchAddTest} from '../actions/testActions';
import TestList from './TestList';



const HomePage = () => (
    <div>
    This is from my homepage component
    <form>
    <button onClick={fetchAndDispatchAddTest}>COPAK TAM MAME</button>
    </form>
    <TestList />
    </div>
)



export default HomePage;