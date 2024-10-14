import React from 'react';
import styles from './ServicesFeature.module.scss';

import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import FeatureCard from '@/components/Molecules/FeatureCard';
import Image from 'next/image';
import { Features } from '../../../../data';
import HeroLeft from '@/components/Molecules/HeroLeft';

const ServicesFeature: React.FC = () => {
  return (
    <section className={styles['feature']}>
      <MainContainer>
        <div className={styles['feature__container']}>
          {/* <FeatureSectionHeader /> */}
          <div className={styles['feature__header']}>
            <HeroLeft
              heading="Are you ready to transform your life?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
              upheading="How does it work?"
              headingSize="small"
            />
          </div>

          <div className={styles['feature__bottom']}>
            <div className={styles['feature__cards']}>
              {Features.slice(0, 4).map((feature, index) => (
                <FeatureCard
                  orientation="horizontal"
                  iconUrl={feature.iconUrl}
                  title={feature.title}
                  description={feature.description}
                  key={index}
                />
              ))}
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
