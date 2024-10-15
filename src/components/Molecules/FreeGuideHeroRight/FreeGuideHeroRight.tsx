import React from 'react';
import styles from './FreeGuideHeroRight.module.scss';
import Image from 'next/image';
import Text from '@/components/Atoms/Text';

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
        <Text
          tone="inverted"
          variant="headingLg"
          className={styles['hero-right__heading']}
        >
          Are you ready to transform your life?
        </Text>
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
            <Text variant="bodyXs" tone="inverted" fontWeight="bold">
              Ready to start? Lets talk!
            </Text>
            <Text tone="inverted" variant="body2xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGuideHeroRight;
