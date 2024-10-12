import React from 'react';
import styles from './SocialProofCardSection.module.scss';
import SocialProofCard from '@/components/Molecules/SocialProofCard';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import { Partners as partners } from '../../../../data';

const SocialProofCardSection: React.FC = () => {
  return (
    <section className={styles['social']}>
      <MainContainer>
        <div className={styles['social__container']}>
          <p>From startups to the world’s largest companies</p>
          <div className={styles['social__cards']}>
            {partners.map(partner => (
              <SocialProofCard
                imageUrl={partner.imageUrl}
                title={partner.title}
                key={partner.id}
              />
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default SocialProofCardSection;
