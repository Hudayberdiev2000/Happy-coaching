import React from 'react';
import styles from './ServicesFeature.module.scss';
import HeroLeft from '@/components/Molecules/HeroLeft';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import FeatureCard from '@/components/Molecules/FeatureCard';
import Image from 'next/image';

const ServicesFeature: React.FC = () => {
  return (
    <section className={styles['feature']}>
      <MainContainer>
        <div className={styles['feature__container']}>
          <div className={styles['feature__upper']}>
            <p className={styles['feature__upheading']}>How does it work?</p>
            <h2 className={styles['feature__heading']}>
              Are you ready to transform your life?
            </h2>
            <p className={styles['feature__description']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          {/* <HeroLeft
            upheading="How does it work?"
            heading="Are you ready to transform your life?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
            headingSize="small"
          /> */}
          <div className={styles['feature__bottom']}>
            <div className={styles['feature__cards']}>
              <FeatureCard
                orientation="horizontal"
                iconName="feature-talk-first.svg"
                title="Talk to me first"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
              <FeatureCard
                orientation="horizontal"
                iconName="feature-schedule.svg"
                title="Schedule a meeting"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
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
            <div className={styles['feature__img-wrapper']}>
              <Image
                className={styles['feature__img']}
                width={560}
                height={560}
                alt="smiling girl"
                src={'/images/services-feature.png'}
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default ServicesFeature;
