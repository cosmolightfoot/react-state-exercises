import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default function ColorPicker({ selectColorHandler }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() => selectColorHandler('red')}>Red</button>
      <button className={styles.yellow} onClick={() => selectColorHandler('yellow')}>Yellow</button>
      <button className={styles.blue} onClick={() => selectColorHandler('blue')}>Blue</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};
