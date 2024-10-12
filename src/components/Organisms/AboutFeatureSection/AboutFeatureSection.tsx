import React from 'react';
import styles from './AboutFeatureSection.module.scss';
import FeatureCard from '@/components/Molecules/FeatureCard';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import { Features as features } from '../../../../data';

const AboutFeatureSection: React.FC = () => {
  return (
    <section className={styles['feature']}>
      <MainContainer>
        <div className={styles['feature__container']}>
          <div className={styles['feature__header']}>
            <p className={styles['feature__upheading']}>How does it work?</p>
            <h2 className={styles['feature__heading']}>
              Are you ready to transform your life?
            </h2>
            <p className={styles['feature__text']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>

          <div className={styles['feature__cards']}>
            {features.map((feature, index) => (
              <FeatureCard
                iconUrl={feature.iconUrl}
                title={feature.title}
                description={feature.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default AboutFeatureSection;
