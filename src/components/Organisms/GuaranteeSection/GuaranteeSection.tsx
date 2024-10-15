import React from 'react';
import styles from './GuaranteeSection.module.scss';
import Image from 'next/image';
import Text from '@/components/Atoms/Text';

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
        <Text
          tone="primary"
          variant="headingMd"
          className={styles['section__heading']}
          alignment="center"
        >
          Guarantee
        </Text>

        <Text
          tone="secondary"
          variant="bodyLg"
          alignment="center"
          className={styles['section__text']}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </Text>
      </div>
    </section>
  );
};

export default GuaranteeSection;
