import React from 'react';
import styles from './HeroLeft.module.scss';
import Button from '@/components/Atoms/Button';

interface HeroLeftProps {
  upheading: string;
  heading: string;
  description: string;
  btnLabel: string;
}

const HeroLeft: React.FC<HeroLeftProps> = ({
  upheading,
  heading,
  description,
  btnLabel,
}) => {
  return (
    <div className={styles['hero-left']}>
      <p className={styles['hero-left__subheading']}>{upheading}</p>
      <h1 className={styles['hero-left__heading']}>{heading}</h1>
      <p className={styles['hero-left__text']}>{description}</p>
      <Button size="large">{btnLabel}</Button>
    </div>
  );
};

export default HeroLeft;
