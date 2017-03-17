import React, { Component } from 'react';

export default class DefaultLayout extends Component {
  render () {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link type="text/css" rel="stylesheet" href="/css/style.css" />
      </head>
      <body>{this.props.children}</body>
      </html>
    );
  }
}