import React from 'react';

export class Title extends React.Component {
  render() {
    return (
      <div className="title">{this.props.title}</div>
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

export class GyazoImageList extends React.Component {
  componentDidMount() {
    this.props.loadGyazoItems(44);
  }

  render() {
    if (this.props.progress) {
      return (
        <div>{this.props.text}</div>
      )
    }else {
      return (
        <div>{this.props.text}</div>
      )
    }
  }
}


export class Description extends React.Component {
  render() {
    return (
      <div className="description">{this.props.text}</div>
    );
  }
}

export class Hashtags extends React.Component {
  render() {
    return (
      <div className="tags">#</div>
    );
  }
}