import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import ReviewCard from '@/components/Molecules/ReviewCard';
import styles from './HomeReview.module.scss';
import React from 'react';
import { Reviews } from '../../../../data';

const HomeReview: React.FC = () => {
  return (
    <section className={styles['review-card']}>
      <MainContainer>
        <h2 className={styles['review-card__heading']}>
          Hear out what my clients say about me.
        </h2>
        <div className={styles['review-card__cards']}>
          {Reviews.slice(0, 3).map(review => (
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
