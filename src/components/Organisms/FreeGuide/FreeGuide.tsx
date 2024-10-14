import React from 'react';
import styles from './FreeGuide.module.scss';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import HeroLeft from '@/components/Molecules/HeroLeft';
import FreeGuideHeroRight from '@/components/Molecules/FreeGuideHeroRight';
import Button from '@/components/Atoms/Button';

const FreeGuide: React.FC = () => {
  return (
    <section className={styles['free-guide']}>
      <MainContainer>
        <div className={styles['free-guide__container']}>
          <HeroLeft
            headingSize="small"
            heading="Don’t miss out on my ‘Live life at the full potential’ free guide"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
            description2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
          >
            <Button size="large">Get your free guide now</Button>
          </HeroLeft>

          <FreeGuideHeroRight isBackground={false} />
        </div>
      </MainContainer>
    </section>
  );
};

export default FreeGuide;
