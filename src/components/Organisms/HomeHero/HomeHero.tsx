import React from 'react';
import styles from './HomeHero.module.scss';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Image from 'next/image';
import Button from '@/components/Atoms/Button';
import SuccessRate from '@/components/Atoms/SuccessRate';

const HomeHero: React.FC = () => {
  return (
    <section className={styles['home-hero']}>
      <MainContainer>
        <div className={styles['home-hero__container']}>
          <Image
            className={styles['home-hero__wave-icon']}
            src={'/icons/wave-icon.svg'}
            width={101}
            height={17}
            alt="wave icon"
          />
          <div className={styles['home-hero__info-box']}>
            <p className={styles['home-hero__subheading']}>
              Proven strategies backed by science for success.
            </p>
            <h1 className={styles['home-hero__heading']}>
              Live life at the full potential
            </h1>
            <p className={styles['home-hero__text']}>
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
            <Button size="large">Get your free guide now</Button>
          </div>

          <div className={styles['home-hero__img-box']}>
            <div className={styles['home-hero__img-wrapper']}>
              <span className={styles['home-hero__success-rate']}>
                <SuccessRate />
              </span>
              <Image
                className={styles['home-hero__image']}
                src={'/images/home-hero.png'}
                alt="Smiling girl"
                height={603}
                width={462}
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default HomeHero;
