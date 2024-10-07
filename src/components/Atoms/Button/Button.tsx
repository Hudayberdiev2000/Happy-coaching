'use client';

import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large' | 'full-width';
  borderRadius?: 'rounded-small' | 'rounded-medium';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  borderRadius = 'rounded-medium',
  children,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.button,
        styles[`button--${size}`],
        styles[`button--${borderRadius}`]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
