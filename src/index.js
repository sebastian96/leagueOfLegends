import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import {apiConsumption} from './utils/petitions';
import 'bootswatch/dist/cyborg/bootstrap.min.css';


const runApp = async () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    
    let initialState = {
        champs: [],
    };

    const response = await apiConsumption('champion.json');
    const keys = Object.keys(response.data);

    for(let i = 0; i <= keys.length; i++) {
        if(keys[i]) {
            initialState.champs.push(response.data[keys[i]])
        }
    }
    const store = createStore(reducer, initialState, composeEnhancers);

    ReactDOM.render( 
        <Provider store = { store } >
            <App / >
        </Provider>,
        document.getElementById('app')
    );
};

runApp();
