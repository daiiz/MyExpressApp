import React from 'react';

// Container Components
export default class FormApp extends React.Component {
  render () {
    return (
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data={this.props.value} />
      </div>
    );
  }
}

FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value  : React.PropTypes.string
};


// Presentational Components
class FormInput extends React.Component {
  send (e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }

  render () {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}

FormInput.propTypes = {
  handleClick: React.PropTypes.func.isRequired
};


class FormDisplay extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}

FormDisplay.propTypes = {
  data: React.PropTypes.string
};