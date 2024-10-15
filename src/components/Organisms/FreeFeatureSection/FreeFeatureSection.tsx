import React from 'react';
import styles from './FreeFeatureSection.module.scss';
import HeroLeft from '@/components/Molecules/HeroLeft';
import FeatureCard from '@/components/Molecules/FeatureCard';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Video from 'next-video';
import coaching from '../../../../videos/coaching.mp4';
import { Features } from '../../../../data';

const FreeFeatureSection: React.FC = () => {
  return (
    <section className={styles['feature']}>
      <div className={styles['feature__upper']}>
        <MainContainer className={styles['feature__upper__container']}>
          <div className={styles['feature__upper__left']}>
            <HeroLeft
              heading="Are you ready to transform your life?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
              upheading="How does it work?"
              headingSize="small"
            />
          </div>

          <div className={styles['feature__cards']}>
            {Features.slice(0, 2).map(feature => (
              <FeatureCard
                key={feature.id}
                orientation="horizontal"
                iconUrl={feature.iconUrl}
                description={feature.description}
                title={feature.title}
              />
            ))}
          </div>
        </MainContainer>
      </div>
      <div className={styles['feature__bottom']}>
        <div className={styles['feature__video-wrapper']}>
          <Video src={coaching} className={styles['feature__video']} />
        </div>
      </div>
    </section>
  );
};

export default FreeFeatureSection;
