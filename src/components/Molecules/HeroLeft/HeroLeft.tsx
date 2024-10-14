import React, { ReactNode } from 'react';
import styles from './HeroLeft.module.scss';
import Text from '@/components/Atoms/Text';

interface HeroLeftProps {
  upheading?: string;
  heading: string;
  headingSize?: 'small' | 'large';
  description: string;
  description2?: string;
  children?: ReactNode;
}

const HeroLeft: React.FC<HeroLeftProps> = ({
  upheading = false,
  headingSize = 'large',
  heading,
  description,
  description2 = false,
  children,
}) => {
  return (
    <div className={styles['hero-left']}>
      {upheading && (
        <Text
          tone="subtle"
          variant="bodySm"
          className={styles['hero-left__upheading']}
        >
          {upheading}
        </Text>
      )}

      <Text
        as="h1"
        tone="primary"
        variant={`${headingSize === 'large' ? 'headingXl' : 'headingLg'}`}
        className={styles['hero-left__heading']}
      >
        {heading}
      </Text>
      <Text variant="bodyMd" className={styles['hero-left__text']}>
        {description}
      </Text>
      {description2 && (
        <Text variant="bodySm" className={styles['hero-left__text']}>
          {description2}
        </Text>
      )}
      {children}
    </div>
  );
};

export default HeroLeft;
