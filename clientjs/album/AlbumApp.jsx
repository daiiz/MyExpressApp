import React from 'react';

export class Title extends React.Component {
  render() {
    return (
      <div>{this.props.title}</div>
    );
  }
}


export class GyazoImage extends React.Component {
  render() {
    var gyazoImgUrl = 'https://i.gyazo.com/' + this.props.img_id + '.png';
    return (
      <img className="photo" src={gyazoImgUrl} title={this.props.img_id} />
    );
  }
}


export class Description extends React.Component {
  render() {
    return (
      <div class="description">{this.props.text}</div>
    );
  }
}

export class Hashtags extends React.Component {
  render() {
    return (
      <div class="tags">#</div>
    );
  }
}