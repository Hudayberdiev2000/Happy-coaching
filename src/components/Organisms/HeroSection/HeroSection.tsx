import React, { ReactNode } from 'react';
import styles from './HeroSection.module.scss';
import WaveIcon from '@/components/Atoms/WaveIcon';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';

interface HeroSectionProps {
  withWaveIcon?: boolean;
  children: ReactNode;
  height?: 'short' | 'high';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  withWaveIcon = false,
  children,
  height = 'short',
}) => {
  return (
    <section className={`${styles['hero']} ${styles[`hero--${height}`]}`}>
      <MainContainer className={styles['hero__container']}>
        {withWaveIcon && (
          <div className={styles['hero__wave-icon']}>
            <WaveIcon />
          </div>
        )}

        {children}
      </MainContainer>
    </section>
  );
};

export default HeroSection;
