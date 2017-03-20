import React, { Component } from 'react';
import Scripts from '../common/Scripts'
import AlbumStyle from './AlbumStyle';

export default class Index extends Component {
  render() {
    return (
      <html>
        <AlbumStyle />
        <body>
          <div id="app"></div>
          <Scripts name="album" />
        </body>
      </html>
    );
  };
}