import React, { Component } from 'react';
import DefaultLayout from './layout';

export default class IndexPage extends Component {

  render () {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
        <ul>
          {this.props.books.map(book => {
            return <li>{book.title} (Pages {book.pages_order.length}) </li>
          })}
        </ul>
      </DefaultLayout>
    );
  }
}