import React from 'react';
import styles from './AboutHeroInfoCards.module.scss';
import Image from 'next/image';
import Text from '@/components/Atoms/Text';

const AboutHeroInfoCards: React.FC = () => {
  return (
    <>
      <div className={styles['hero__icon1-wrapper']}>
        <Image
          className={styles['hero__icon1']}
          width={80}
          height={80}
          src={'/icons/about-heroicon1.svg'}
          alt="icon1"
        />
      </div>
      <div className={styles['hero__icon2-wrapper']}>
        <Image
          className={styles['hero__icon2']}
          width={48}
          height={48}
          src={'/icons/about-heroicon2.svg'}
          alt="icon1"
        />
        <div className={styles['hero__icon2-wrapper__text-box']}>
          <Text>More than 250+</Text>
          <Text tone="primary">Online Sessions</Text>
        </div>
      </div>
    </>
  );
};

export default AboutHeroInfoCards;
