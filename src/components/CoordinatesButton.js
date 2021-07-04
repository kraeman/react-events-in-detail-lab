import React, { Component } from 'react';

class CoordinatesButton extends Component {


  handleClick = (event) => {
      let array = []
      array.push(event.pageX)
      array.push(event.pageY)
      this.props.onReceiveCoordinates(array)
  }

  render() {
    return (
        <button onClick={this.handleClick} />
    );
  }
}

export default CoordinatesButton;