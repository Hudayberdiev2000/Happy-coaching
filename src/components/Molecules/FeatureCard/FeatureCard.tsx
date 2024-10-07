import React from 'react';
import styles from './FeatureCard.module.scss';
import Image from 'next/image';

interface FeatureCardProps {
  iconName: string;
  title: string;
  description: string;
  orientation?: 'vertical' | 'horizontal';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconName,
  title,
  description,
  orientation = 'vertical',
}) => {
  return (
    <div
      className={`${styles['feature-card']} ${styles[`feature-card--${orientation}`]}`}
    >
      <div className={styles['feature-card__icon-wrapper']}>
        <Image
          className={styles['feature-card__icon']}
          width={48}
          height={48}
          alt={iconName}
          src={`/icons/${iconName}`}
        />
      </div>
      <div className={styles['feature-card__text-box']}>
        <h4 className={styles['feature-card__heading']}>{title}</h4>
        <p className={styles['feature-card__description']}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
