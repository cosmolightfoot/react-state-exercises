import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  }

  setColor(color) {
    this.setState({ color });
    console.log('COLOR TEST', color);
  }

  render() {
    const { color } = this.state;

    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red} onClick={() => this.setColor('red')}>Red</button> 
        <button className={styles.yellow} onClick={() => this.setColor('yellow')}>Yellow</button> 
        <button className={styles.blue} onClick={() => this.setColor('blue')}>Blue</button> 
        <div className={styles[color]}></div>
      </section>
    );
  }
}
