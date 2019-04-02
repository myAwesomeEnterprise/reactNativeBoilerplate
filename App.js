/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import {Persistor, Store} from './src/redux/store';
import Home from './src/views/home';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}
