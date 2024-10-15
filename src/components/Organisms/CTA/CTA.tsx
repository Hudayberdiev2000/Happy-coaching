import React from 'react';
import styles from './CTA.module.scss';
import Image from 'next/image';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Button from '@/components/Atoms/Button';
import Text from '@/components/Atoms/Text';

const CTA: React.FC = () => {
  return (
    <section className={styles.cta}>
      <MainContainer className={styles['cta__container']}>
        <div className={styles['cta__left-box']}>
          <Text
            variant="headingMd"
            tone="primary"
            className={styles['cta__heading']}
          >
            Get 15-Minutes Complimentary online session.
          </Text>
          <Text
            tone="secondary"
            variant="bodyLg"
            className={styles['cta__text']}
          >
            Limited Period Offer. Claim Now.
          </Text>
          <Button size="large">Book now</Button>
        </div>

        <div className={styles['cta__right-box']}>
          <div className={styles['cta__img-wrapper']}>
            <Image
              className={styles['cta__image']}
              src="/images/cta-image.png"
              alt="smiling girls"
              height={432}
              width={560}
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default CTA;
