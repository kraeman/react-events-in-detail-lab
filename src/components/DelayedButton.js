<<<<<<< HEAD
=======
// Code DelayedButton Component Here
>>>>>>> e5c610e18727109b0443743a77567264ee7d0ccb
import React, { Component } from 'react';

class DelayedButton extends Component {

<<<<<<< HEAD

   

  handleClick = (event) => {
      
      event.persist()
      setTimeout(this.props.onDelayedClick, this.props.delay, event)

  }

  render() {
    return (
        <button onClick={(event) => this.handleClick(event)} />
    );
=======
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
>>>>>>> e5c610e18727109b0443743a77567264ee7d0ccb
  }
}

export default DelayedButton;