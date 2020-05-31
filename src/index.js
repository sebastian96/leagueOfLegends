import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const fetchData = () => {
    const API = 'http://ddragon.leagueoflegends.com/cdn/10.10.3216176/data/es_MX/champion.json';
    return fetch(API)
    .then(data => data.json())
    .then(response => response)
    .catch(error => console.error(error));
};


fetchData().then(response => {
    const keys = Object.keys(response.data);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

    let initialState = {
        champs: []
    };
    
    for(let i = 0; i <= keys.length; i++) {
        if(keys[i]) {
            initialState.champs.push(response.data[keys[i]])
        }
    }
    
    const store = createStore(reducer, initialState, composeEnhancers);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    );
})
