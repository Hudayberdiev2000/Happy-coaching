import React, { ReactNode } from 'react';
import styles from './HeroImageBox.module.scss';
import Image from 'next/image';

interface HeroImageBoxProps {
  children?: ReactNode;
  imageUrl: string;
  imageAlt?: string;
  heroType?: 'short' | 'high';
}

const HeroImageBox: React.FC<HeroImageBoxProps> = ({
  children = null,
  imageUrl,
  imageAlt = 'Hero image',
  heroType = 'short',
}) => {
  return (
    <div
      className={`${styles['box']} ${styles[`box--${heroType === 'high' ? 'centered' : 'not-centered'}`]}`}
    >
      <div className={styles['box__img-wrapper']}>
        {children}
        <Image
          className={styles['box__img']}
          src={imageUrl}
          alt={imageAlt}
          height={603}
          width={462}
        />
      </div>
    </div>
  );
};

export default HeroImageBox;
