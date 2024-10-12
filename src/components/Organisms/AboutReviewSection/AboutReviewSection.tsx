import React from 'react';
import styles from './AboutReviewSection.module.scss';
import ReviewCard from '@/components/Molecules/ReviewCard';
import { Reviews as reviews } from '../../../../data';

const AboutReviewSection: React.FC = () => {
  return (
    <section className={styles['review']}>
      <h2 className={styles['review__heading']}>
        Hear out what my clients say about me.
      </h2>
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
