import React from 'react';
import styles from './FreeGuideHeroLeft.module.scss';
import Image from 'next/image';

const FreeGuideHeroLeft: React.FC = () => {
  return (
    <div className={styles['hero-left']}>
      <div className={styles['hero-left__inner']}>
        <p className={styles['hero-left__heading']}>
          Are you ready to transform your life?
        </p>
        <Image
          className={styles['hero-left__img']}
          src={'/images/free-hero-img.png'}
          width={443}
          height={443}
          alt="smiling girl"
        />

        <div className={styles['hero-left__message-box']}>
          <div className={styles['hero-left__icon-wrapper']}>
            <Image
              src={'/icons/message-icon.svg'}
              width={10}
              height={10}
              alt="message-icon"
            />
          </div>
          <div className={styles['hero-left__text-box']}>
            <p className={styles['hero-left__message-heading']}>
              Ready to start? Lets talk!
            </p>
            <p className={styles['hero-left__message-text']}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGuideHeroLeft;
