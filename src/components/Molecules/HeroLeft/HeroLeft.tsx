import React from 'react';
import styles from './HeroLeft.module.scss';
import Button from '@/components/Atoms/Button';

interface HeroLeftProps {
  upheading?: string;
  heading: string;
  headingSize?: 'small' | 'medium' | 'large';
  description: string;
  description2?: string;
  btnLabel?: string;
}

const HeroLeft: React.FC<HeroLeftProps> = ({
  upheading = false,
  headingSize = 'large',
  heading,
  description,
  description2 = false,
  btnLabel,
}) => {
  return (
    <div className={styles['hero-left']}>
      {upheading && (
        <p className={styles['hero-left__subheading']}>{upheading}</p>
      )}

      <h1
        className={`${styles['hero-left__heading']} ${styles[`hero-left__heading--${headingSize}`]}`}
      >
        {heading}
      </h1>
      <p className={styles['hero-left__text']}>{description}</p>
      {description2 && (
        <p className={styles['hero-left__text']}>{description2}</p>
      )}
      {btnLabel && <Button size="large">{btnLabel}</Button>}
    </div>
  );
};

export default HeroLeft;
