import React from 'react';
import styles from './GuaranteeSection.module.scss';
import Image from 'next/image';

const GuaranteeSection: React.FC = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['section__container']}>
        <Image
          className={styles['section__img']}
          width={312}
          height={266}
          src={'/images/guarantee.svg'}
          alt="guarantee img"
        />
        <h2 className={styles['section__heading']}>Guarantee</h2>

        <p className={styles['section__text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
