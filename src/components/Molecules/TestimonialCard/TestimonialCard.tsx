import React from 'react';
import styles from './TestimonialCard.module.scss';
import Image from 'next/image';
import Stars from '@/components/Atoms/Stars';

interface TestimonialCardProps {
  description: string;
  imageName: string;
  firstName: string;
  lastName: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  description,
  imageName,
  firstName,
  lastName,
}) => {
  return (
    <div className={styles['card']}>
      <p className={styles['card__description']}>{description}</p>

      <Image
        className={styles['card__img']}
        width={64}
        height={64}
        src={`/images/${imageName}`}
        alt={imageName}
      />

      <p className={styles['card__first-name']}>{firstName}</p>
      <p className={styles['card__last-name']}> {lastName}</p>

      <div className={styles['card__stars']}>
        <Stars rating={5} />
      </div>
    </div>
  );
};

export default TestimonialCard;
