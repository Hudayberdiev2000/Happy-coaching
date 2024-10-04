import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import ReviewCard from '@/components/Molecules/ReviewCard';
import styles from './HomeReview.module.scss';
import React from 'react';

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

const HomeReview: React.FC = () => {
  return (
    <section className={styles['review-card']}>
      <MainContainer>
        <h2 className={styles['review-card__heading']}>
          Hear out what my clients say about me.
        </h2>
        <div className={styles['review-card__cards']}>
          {reviews.map(review => (
            <ReviewCard
              comment={review.comment}
              rating={review.rating}
              imageUrl={review.imageUrl}
              commenter={review.commenter}
              key={review.commenter}
            />
          ))}
        </div>
      </MainContainer>
    </section>
  );
};

export default HomeReview;
