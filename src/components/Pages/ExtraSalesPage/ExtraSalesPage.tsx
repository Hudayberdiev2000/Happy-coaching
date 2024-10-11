import AboutFeatureSection from '@/components/Organisms/AboutFeatureSection';
import CTA from '@/components/Organisms/CTA';
import ExtraSalesHero from '@/components/Organisms/ExtraSalesHero';
import FAQSection from '@/components/Organisms/FAQSection';
import FreeFeatureSection from '@/components/Organisms/FreeFeatureSection';
import GuaranteeSection from '@/components/Organisms/GuaranteeSection';
import QualificationSection from '@/components/Organisms/QualificationSection';
import TestimonialSection from '@/components/Organisms/TestimonialSection';
import React from 'react';

import styles from './ExtraSalesPage.module.scss';

const ExtraSalesPage: React.FC = () => {
  return (
    <>
      <ExtraSalesHero />
      <AboutFeatureSection />
      <FreeFeatureSection />
      <TestimonialSection />
      <div className={styles['qualification']}>
        <QualificationSection />
      </div>
      <CTA />
      <GuaranteeSection />
      <FAQSection />
    </>
  );
};

export default ExtraSalesPage;
