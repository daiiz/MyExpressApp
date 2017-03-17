import React, { Component } from 'react';
import DefaultLayout from './layout';

export default class IndexPage extends Component {
  render () {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
      </DefaultLayout>
    );
  }
}