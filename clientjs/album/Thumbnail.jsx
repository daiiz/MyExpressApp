import React from 'react';

export class SquareThumbnail extends React.Component {
  render() {
    return (
      <div className="cell card-square">
        <div className="card-bgimg"
             style={{backgroundImage: 'url('+ this.props.t +')'}}></div>
      </div>
    );
  }
}