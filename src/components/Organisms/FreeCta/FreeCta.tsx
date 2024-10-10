import React from 'react';
import styles from './FreeCta.module.scss';
import Button from '@/components/Atoms/Button';
import Stars from '@/components/Atoms/Stars';

const FreeCta: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles['cta__upper']}>
        <h2 className={styles['cta__heading']}>
          Don’t miss out on my{' '}
          <span className={styles['cta__heading__highlight']}>
            {' '}
            ‘Live life at the full potential’
          </span>
          free guide
        </h2>

        <p className={styles['cta__description']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>

        <Button size="large">Download my free guide</Button>
      </div>
      <div className={styles['cta__bottom']}>
        <p className={styles['cta__bottom__text']}>
          More than 100+ 5 star reviews
        </p>
        <Stars rating={5} />
      </div>
    </section>
  );
};

export default FreeCta;
