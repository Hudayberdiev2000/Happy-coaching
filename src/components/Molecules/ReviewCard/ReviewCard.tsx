import Image from 'next/image';
import React from 'react';
import styles from './ReviewCard.module.scss';
import Stars from '@/components/Atoms/Stars';

interface ReviewCardProps {
  commenter: string;
  rating: number;
  comment: string;
  imageUrl: string;
  style?: 'stared' | 'numbered';
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  commenter,
  rating,
  comment,
  imageUrl,
  style = 'starred',
}) => {
  return (
    <div className={styles['review-card']}>
      {style === 'numbered' && (
        <p className={styles['review-card__rating-number']}>{`5/${rating}`}</p>
      )}
      <p className={styles['review-card__comment']}>{`"${comment}"`}</p>
      <p className={styles['review-card__commenter-name']}>{commenter}</p>
      <div className={styles['review-card__img-wrapper']}>
        <Image
          className={styles['review-card__img']}
          src={imageUrl}
          alt={`${commenter}'s photo`}
          height={70}
          width={70}
        />
      </div>
      {style === 'starred' && <Stars rating={rating} />}
    </div>
  );
};

export default ReviewCard;
