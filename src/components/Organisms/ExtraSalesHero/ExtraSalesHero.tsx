import React from 'react';
import styles from './ExtraSalesHero.module.scss';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Image from 'next/image';
import SuccessRate from '@/components/Atoms/SuccessRate';
import WaveIcon from '@/components/Atoms/WaveIcon';
import HeroLeft from '@/components/Molecules/HeroLeft';

const ExtraSalesHero: React.FC = () => {
  return (
    <section className={styles['hero']}>
      <MainContainer>
        <div className={styles['hero__container']}>
          <div className={styles['hero__wave-icon']}>
            <WaveIcon />
          </div>

          <HeroLeft
            upheading="Proven strategies backed by science for success."
            heading="Self Esteem Therapy"
            description="I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?"
            btnLabel="Calm your spot"
          />

          <div className={styles['hero__img-box']}>
            <div className={styles['hero__img-wrapper']}>
              <Image
                className={styles['hero__image']}
                src={'/images/extra-hero.jpg'}
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

export default ExtraSalesHero;
