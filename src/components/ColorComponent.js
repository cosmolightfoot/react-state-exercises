import React, { PureComponent } from 'react';
import ColorDisplay from './ColorDisplay.js';


export default class ColorComponent extends PureComponent {
  state = {
    color: ''
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ color: this.randomColor() });
    }, 1000);
  }

  randomColor() {
    const colors = ['steelblue', 'firebrick', 'teal', 'fuschia'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  render() {
    const { color } = this.state;
    return (
      <ColorDisplay color={color} />
    );
  }

}
