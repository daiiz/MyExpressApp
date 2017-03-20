import React from 'react';

export class SquareThumbnail extends React.Component {

  click (e) {
    e.preventDefault();
    let image = {
      i: this.props.i,
      p: this.props.p,
      id: this.props.t_id
    };
    this.props.handleClick(image);
  }

  render () {
    return (
      <div className="cell card-square"
           onClick={e => this.click(e)}>
        <div className="card-bgimg"
             style={{backgroundImage: 'url('+ this.props.t +')'}}></div>
      </div>
    );
  }
}