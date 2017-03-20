import React, { Component } from 'react';

export default class Scripts extends Component {
  render () {
    var jsPath  = "/js/"+ this.props.name +".bundle.js";
    return (
      <a-cdnjs>
        <script src="//cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/react/15.4.1/react-dom.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src={jsPath}></script>
      </a-cdnjs>
    );
  }
}
