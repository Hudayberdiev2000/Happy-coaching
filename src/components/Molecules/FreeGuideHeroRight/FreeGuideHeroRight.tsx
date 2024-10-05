import React from 'react';
import styles from './FreeGuideHeroRight.module.scss';
import Image from 'next/image';

interface FreeGuideHeroRightProps {
  isBackground?: boolean;
}

const FreeGuideHeroRight: React.FC<FreeGuideHeroRightProps> = ({
  isBackground = true,
}) => {
  return (
    <div
      className={`${styles['hero-right']} ${isBackground ? styles['hero-right--with-bg'] : ''}`}
    >
      <div className={styles['hero-right__inner']}>
        <p className={styles['hero-right__heading']}>
          Are you ready to transform your life?
        </p>
        <Image
          className={styles['hero-right__img']}
          src={'/images/free-hero-img.png'}
          width={443}
          height={443}
          alt="smiling girl"
        />

        <div className={styles['hero-right__message-box']}>
          <div className={styles['hero-right__icon-wrapper']}>
            <Image
              src={'/icons/message-icon.svg'}
              width={10}
              height={10}
              alt="message-icon"
            />
          </div>
          <div className={styles['hero-right__text-box']}>
            <p className={styles['hero-right__message-heading']}>
              Ready to start? Lets talk!
            </p>
            <p className={styles['hero-right__message-text']}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGuideHeroRight;
