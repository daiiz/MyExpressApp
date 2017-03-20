import React, { Component } from 'react';
import Scripts from '../common/Scripts'

// 静的なコンテンツをレンダリング
export default class Index extends Component {
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link type="text/css" rel="stylesheet" href="/css/style.css" />
      </head>
        <body>
          <div>{this.props.title}</div>
          <div id="app"></div>
          <Scripts name="formapp"/>
        </body>
      </html>
    );
  }
}