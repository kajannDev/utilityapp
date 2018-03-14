import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Stopwatch from './stopwatch/stopwatch';
import reducers from './stopwatch/reducers/stopwatchReducer';

//const store = createStore(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// const store = createStore(
//    reducers,
//    applyMiddleware(thunk)
// );

// const store = compose(applyMiddleware(thunk))(createStore)(reducers);
export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>                
                <Stopwatch />
            </Provider>
        );
    }
}
