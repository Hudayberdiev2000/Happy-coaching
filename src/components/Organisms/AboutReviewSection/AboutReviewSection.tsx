import React from 'react';
import styles from './AboutReviewSection.module.scss';
import ReviewCard from '@/components/Molecules/ReviewCard';
import { Reviews as reviews } from '../../../../data';
import Text from '@/components/Atoms/Text';

const AboutReviewSection: React.FC = () => {
  return (
    <section className={styles['review']}>
      <Text
        variant="headingLg"
        tone="primary"
        className={styles['review__heading']}
      >
        Hear out what my clients say about me.
      </Text>
      <div className={styles['review__cards']}>
        {reviews.slice(0, 3).map(review => (
          <ReviewCard
            comment={review.comment}
            commenter={review.commenter}
            style="numbered"
            rating={review.rating}
            imageUrl={review.imageUrl}
            key={review.id}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutReviewSection;
