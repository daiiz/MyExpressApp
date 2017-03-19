import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// https://gyazo.com/3d3a64aa24769f5d5d7fd268ea3dc7a7
// https://github.com/maechabin/redux-sample
// http://mae.chab.in/archives/2885

import FormApp from './FormApp.jsx';
import Text from './Text.jsx';

/**
 * Actions
 */
const SEND = 'SEND';

let send = (value) => {
  return {
    type: SEND,
    value: value
  };
};


/**
 * Reducers
 */
let formReducer = (state, action) => {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
        value: action.value
      });
    default:
      return state;
  }
};


/**
 * Store
 */
const initialState = {
  value: null
};
const store = createStore(formReducer, initialState);


/**
 * Connect to Redux
 */
let mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.value
  };
};


let mapDispatchToProps = (dispatch) => {
  return {
    onClick(value) {
      dispatch(send(value));
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(FormApp);


/**
 * Rendering
 */
ReactDOM.render(
  <t>
    <Text text="Hello React-Redux!!" />
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </t>,
  document.querySelector('#app')
);