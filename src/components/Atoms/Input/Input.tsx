import React from 'react';
import styles from './Input.module.scss';

const Input: React.FC = () => {
  return <input type="text" className={styles['input']} />;
};

export default Input;
