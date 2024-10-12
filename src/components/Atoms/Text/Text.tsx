import React from 'react';
import styles from './Text.module.scss';

interface TextProps {
  as?: keyof JSX.IntrinsicElements; // Restrict to valid HTML elements
  children: React.ReactNode;
  alignment?: 'start' | 'center' | 'end' | 'justify';
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  truncate?: boolean;
  visuallyHidden?: boolean;
  variant?:
    | 'headingXs'
    | 'headingSm'
    | 'headingMd'
    | 'headingLg'
    | 'headingXl'
    | 'heading2xl'
    | 'bodyXs'
    | 'bodySm'
    | 'bodyMd'
    | 'bodyLg';
  tone?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
}

const Text: React.FC<TextProps> = ({ as: Tag = 'p', children }) => {
  return <Tag className={styles.text}>{children}</Tag>;
};

export default Text;
