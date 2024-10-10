import React from 'react';
import styles from './FreeFeatureSection.module.scss';
import HeroLeft from '@/components/Molecules/HeroLeft';
import FeatureCard from '@/components/Molecules/FeatureCard';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Video from 'next-video';
import coaching from '../../../../videos/coaching.mp4';

const FreeFeatureSection: React.FC = () => {
  return (
    <section className={styles['feature']}>
      <div className={styles['feature__upper']}>
        <MainContainer>
          <div className={styles['feature__upper__container']}>
            <div className={styles['feature__upper__left']}>
              <HeroLeft
                heading="Are you ready to transform your life?"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
                upheading="How does it work?"
                headingSize="medium"
              />
            </div>

            <div className={styles['feature__cards']}>
              <FeatureCard
                orientation="horizontal"
                iconName="feature-online-con.svg"
                title="Online consultation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
              <FeatureCard
                orientation="horizontal"
                iconName="feature-ready-tt.svg"
                title="Ready to start? Let’s talk!"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
            </div>
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
