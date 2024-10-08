import React from 'react';
import styles from './FreeHero.module.scss';
import Input from '@/components/Atoms/Input';
import Button from '@/components/Atoms/Button';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import FreeGuideHeroRight from '@/components/Molecules/FreeGuideHeroRight';

const FreeForm: React.FC = () => {
  return (
    <form className={styles['hero__form']}>
      <Input placeholder="Name" />
      <Input placeholder="Enter your email" type="email" />
      <p className={styles['hero__label']}>
        We care about your data in our{' '}
        <span className={styles['hero__label__link']}> privacy policy</span>
      </p>

      <Button size="full-width">Get free guide</Button>
    </form>
  );
};

const HeroLeft: React.FC = () => {
  return (
    <div className={styles['hero__left']}>
      <h2 className={styles['hero__heading']}>
        Results that speak for themselves
      </h2>
      <p className={styles['hero__description']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </p>
      <FreeForm />
    </div>
  );
};

const FreeHero: React.FC = () => {
  return (
    <section className={styles['hero']}>
      <MainContainer>
        <div className={styles['hero__container']}>
          <HeroLeft />
          <FreeGuideHeroRight />
        </div>
      </MainContainer>
    </section>
  );
};

export default FreeHero;
