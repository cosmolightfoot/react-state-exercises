import React, { PureComponent } from 'react';
import ColorDisplay from './ColorDisplay.js';
import ColorPicker from './ColorPicker.js'; 

export default class App extends PureComponent {
  state = {
    color: ''
  }

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <>
        <ColorPicker selectColorHandler={this.selectColor} />
        <ColorDisplay color={color} />
      </>
    );
  }
}

