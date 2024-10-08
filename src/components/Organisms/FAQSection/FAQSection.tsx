import React from 'react';
import styles from './FAQSection.module.scss';
import FAQ from '@/components/Molecules/FAQ';
import Button from '@/components/Atoms/Button';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';

const Header: React.FC = () => {
  return (
    <header className={styles['faq__header']}>
      <h2 className={styles['faq__heading']}>Good to know.</h2>
      <p className={styles['faq__subheading']}>
        Everything you need to know about the my services.
      </p>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <div className={styles['faq__footer']}>
      <div>
        <p className={styles['faq__footer__heading']}>Still have questions?</p>
        <p className={styles['faq__footer__description']}>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
      </div>
      <Button>Get in touch</Button>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className={styles['faq']}>
      <MainContainer>
        <div className={styles['faq__container']}>
          <Header />
          <FAQ />
          <Footer />
        </div>
      </MainContainer>
    </section>
  );
};

export default FAQSection;
