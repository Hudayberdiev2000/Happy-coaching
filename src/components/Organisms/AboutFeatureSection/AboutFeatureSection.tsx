import React from 'react';
import styles from './AboutFeatureSection.module.scss';
import FeatureCard from '@/components/Molecules/FeatureCard';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import { Features as features } from '../../../../data';
import Text from '@/components/Atoms/Text';

const AboutFeatureSection: React.FC = () => {
  return (
    <section className={styles['feature']}>
      <MainContainer className={styles['feature__container']}>
        <div className={styles['feature__header']}>
          <Text
            alignment="center"
            variant="bodySm"
            tone="subtle"
            className={styles['feature__upheading']}
          >
            How does it work?
          </Text>

          <Text
            as="h2"
            tone="primary"
            variant="headingMd"
            alignment="center"
            fontWeight="extraBold"
            className={styles['feature__heading']}
          >
            Are you ready to transform your life?
          </Text>

          <Text
            tone="secondary"
            variant="bodyXl"
            className={styles['feature__text']}
            alignment="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </Text>
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
      </MainContainer>
    </section>
  );
};

export default AboutFeatureSection;
