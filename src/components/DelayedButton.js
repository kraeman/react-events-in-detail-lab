// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
}    

handleChange(e) {
        e.persist();
     
        setTimeout = () => {this.props.onDelayedClick(e), this.props.delay};
      }

  render() {
    return (
        <button onClick={this.handleChange} />
    )
  }
}

export default DelayedButton;