import React from "react";
import { render } from 'react-dom';
import App from './Components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers';
import { addCharacterById } from './Actions'


const store = createStore(rootReducer);
console.log('Current Store', store.getState());
store.subscribe(() => console.log('Store: ', store.getState()))

store.dispatch(addCharacterById(2));

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
