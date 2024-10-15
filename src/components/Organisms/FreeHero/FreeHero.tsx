import React from 'react';
import styles from './FreeHero.module.scss';
import Input from '@/components/Atoms/Input';
import Button from '@/components/Atoms/Button';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import FreeGuideHeroRight from '@/components/Molecules/FreeGuideHeroRight';
import HeroLeft from '@/components/Molecules/HeroLeft';
import Text from '@/components/Atoms/Text';

const FreeForm: React.FC = () => {
  return (
    <form className={styles['hero__form']}>
      <Input placeholder="Name" />
      <Input placeholder="Enter your email" type="email" />
      <Text variant="bodyXs">
        We care about your data in our{' '}
        <span className={styles['hero__link']}> privacy policy</span>
      </Text>

      <Button size="full-width">Get free guide</Button>
    </form>
  );
};

const FreeHero: React.FC = () => {
  return (
    <section className={styles['hero']}>
      <MainContainer className={styles['hero__container']}>
        <HeroLeft
          headingSize="small"
          heading="Results that speak for themselves"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
"
        >
          <FreeForm />
        </HeroLeft>
        <FreeGuideHeroRight />
      </MainContainer>
    </section>
  );
};

export default FreeHero;
