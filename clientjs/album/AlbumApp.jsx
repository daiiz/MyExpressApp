import React from 'react';
import { SquareThumbnail } from './Thumbnail.jsx'

export class Title extends React.Component {
  render() {
    return (
      <div className="title">{this.props.title}</div>
    );
  }
}


export class GyazoImage extends React.Component {
  render() {
    return (
      <img className="photo" src={this.props.src} title={this.props.imgId} />
    );
  }
}

export class GyazoImageList extends React.Component {
  componentDidMount() {
    this.props.loadGyazoItems(44);
  }

  render() {
    if (this.props.progress) {
      // 取得中
      return (
        <div>{this.props.text}</div>
      )
    }else {
      var thumbnails = [];
      for (let j = 0; j < this.props.images.length; j++) {
        let item = this.props.images[j];
        let id = item.image_id;
        let t = item.thumb_url;
        let i = item.url;
        let p = item.permalink_url;
        thumbnails.push(<SquareThumbnail key={id} t={t} i={i} p={p} />)
      }

      return (
        <div>
          <div className="status">{this.props.text}</div>
          <div className="thumbnails">{thumbnails}</div>
        </div>
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