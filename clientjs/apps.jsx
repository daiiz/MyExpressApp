import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text.jsx';


$(function () {
  ReactDOM.render(<Text text="Hello World!"></Text>, $('#app')[0]);
});