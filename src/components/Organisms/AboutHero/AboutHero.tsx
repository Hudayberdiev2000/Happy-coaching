import React from 'react';
import styles from './AboutHero.module.scss';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Image from 'next/image';
import HeroLeft from '@/components/Molecules/HeroLeft';

const AboutHero: React.FC = () => {
  return (
    <section className={styles['hero']}>
      <MainContainer>
        <div className={styles['hero__container']}>
          <HeroLeft
            upheading="Proven strategies backed by science for success."
            heading="Live life at the full potential"
            description="I help people to discover their true potential and live a fulfilling
        life... Discover the simple 3 steps that I discovered to hack
        productivity. It just works and it is begin using backed by science.
        Wanna transform your life?"
            btnLabel="Get your free guide now"
          />

          <div className={styles['hero__img-box']}>
            <div className={styles['hero__img-wrapper']}>
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
                  <span className={styles['hero__icon2-wrapper__text1']}>
                    More than 250+
                  </span>
                  <span className={styles['hero__icon2-wrapper__text2']}>
                    Online Sessions
                  </span>
                </div>
              </div>

              <Image
                className={styles['hero__image']}
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

export default AboutHero;
