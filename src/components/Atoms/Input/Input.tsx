import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  placeholder: string;
  type?: 'text' | 'email' | 'password'; // Allow these types
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={styles['input']}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
