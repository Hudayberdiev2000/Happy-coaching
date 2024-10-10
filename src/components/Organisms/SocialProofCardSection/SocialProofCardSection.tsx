import React from 'react';
import styles from './SocialProofCardSection.module.scss';
import SocialProofCard from '@/components/Molecules/SocialProofCard';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';

const socialProofs = [
  {
    imageUrl: '/icons/social-proof1.svg',
    title: 'Layers',
  },
  {
    imageUrl: '/icons/social-proof2.svg',
    title: 'Sysyphus',
  },
  {
    imageUrl: '/icons/social-proof3.svg',
    title: 'Circooles',
  },
  {
    imageUrl: '/icons/social-proof4.svg',
    title: 'Catalog',
  },
  {
    imageUrl: '/icons/social-proof5.svg',
    title: 'Quotient',
  },
];

const SocialProofCardSection: React.FC = () => {
  return (
    <section className={styles['social']}>
      <MainContainer>
        <div className={styles['social__container']}>
          <p>From startups to the world’s largest companies</p>
          <div className={styles['social__cards']}>
            {socialProofs.map((socialProof, index) => (
              <SocialProofCard
                imageUrl={socialProof.imageUrl}
                title={socialProof.title}
                key={index}
              />
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default SocialProofCardSection;
