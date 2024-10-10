import React from 'react';
import styles from './AboutReviewSection.module.scss';
import ReviewCard from '@/components/Molecules/ReviewCard';

const reviews = [
  {
    commenter: 'Jane',
    rating: 5,
    comment:
      'I gained so much confidence in my ability to connect and deepen my relationships with people. ',
    imageUrl: '/images/review-image1.png',
  },
  {
    commenter: 'Catherine',
    rating: 5,
    comment:
      'I gained so much confidence in my ability to connect and deepen my relationships with people. ',
    imageUrl: '/images/review-image2.png',
  },
  {
    commenter: 'Jane',
    rating: 5,
    comment:
      'I gained so much confidence in my ability to connect and deepen my relationships with people. ',
    imageUrl: '/images/review-image3.png',
  },
];

const AboutReviewSection: React.FC = () => {
  return (
    <section className={styles['review']}>
      <h2 className={styles['review__heading']}>
        Hear out what my clients say about me.
      </h2>
      <div className={styles['review__cards']}>
        {reviews.map((review, index) => (
          <ReviewCard
            comment={review.comment}
            commenter={review.commenter}
            style="numbered"
            rating={review.rating}
            imageUrl={review.imageUrl}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutReviewSection;
