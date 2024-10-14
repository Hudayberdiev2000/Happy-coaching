import React from 'react';
import clsx from 'clsx';
import styles from './Text.module.scss';

interface TextProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  alignment?: 'start' | 'center' | 'end' | 'justify';
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold' | 'extraBold';
  truncate?: boolean;
  visuallyHidden?: boolean;
  variant?:
    | 'headingSm'
    | 'headingMd'
    | 'headingLg'
    | 'headingXl'
    | 'body2xs'
    | 'bodyXs'
    | 'bodySm'
    | 'bodyMd'
    | 'bodyLg';
  tone?: 'primary' | 'secondary' | 'subtle' | 'inverted' | 'success' | 'error';
}

const Text: React.FC<TextProps> = ({
  as: Tag = 'p',
  children,
  alignment = 'start',
  fontWeight = 'regular',
  truncate,
  visuallyHidden,
  variant = 'bodySm',
  tone = 'secondary',
}) => {
  const classes = clsx(
    styles.text,
    styles[`text--${alignment}`],
    styles[`text--${fontWeight}`],
    styles[`text--${truncate ? 'truncate' : 'no-truncate'}`],
    styles[`text--${visuallyHidden ? 'hidden' : 'visible'}`],
    styles[`text--${variant}`],
    styles[`text--${tone}`]
  );
  return <Tag className={classes}>{children}</Tag>;
};

export default Text;
