import React from 'react';
import styles from './TestimonialCard.module.scss';
import Image from 'next/image';
import Stars from '@/components/Atoms/Stars';
import Text from '@/components/Atoms/Text';

interface TestimonialCardProps {
  description: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  description,
  imageUrl,
  firstName,
  lastName,
}) => {
  return (
    <div className={styles['card']}>
      <Text
        tone="secondary"
        variant="bodySm"
        className={styles['card__description']}
        alignment="center"
      >
        {description}
      </Text>

      <Image
        className={styles['card__img']}
        width={64}
        height={64}
        src={imageUrl}
        alt={imageUrl}
      />

      <Text
        variant="bodyMd"
        fontWeight="bold"
        className={styles['card__first-name']}
        alignment="center"
      >
        {firstName}
      </Text>

      <Text
        tone="subtle"
        variant="bodySm"
        className={styles['card__last-name']}
        alignment="center"
      >
        {' '}
        {lastName}
      </Text>

      <div className={styles['card__stars']}>
        <Stars rating={5} />
      </div>
    </div>
  );
};

export default TestimonialCard;
