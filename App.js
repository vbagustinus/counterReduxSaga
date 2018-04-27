/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import allReducers from './src/reducers'
import CounterContainer from './src/containers/CounterContainer'
//redux Saga
import createSagaMiddleware from 'redux-saga'

//root saga
import rootSaga from './src/sagas/rootSaga';

//middleware 
const sagaMiddleware =  createSagaMiddleware()

let store = createStore(allReducers, applyMiddleware(sagaMiddleware))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer/>
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga)