import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider } from "@chakra-ui/react"
//importing routig
import  {BrowserRouter as Router} from "react-router-dom";
import {ColorModeScript } from "@chakra-ui/react"

//redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import contextReducer from './Redux/Reducer/contextReducer';
const store=createStore(contextReducer)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ChakraProvider>
          <ColorModeScript initialColorMode="light"/>
        <App />
      </ChakraProvider>
    </Router>
  </Provider>
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
