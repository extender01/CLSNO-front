import React from 'react';
import {fetchAndDispatchAddTest} from '../actions/testActions';



const HomePage = () => (
    <div>
    This is from my homepage component
    <form>
    <button onClick={fetchAndDispatchAddTest}>COPAK TAM MAME</button>
    </form>
    </div>
)

export default HomePage;