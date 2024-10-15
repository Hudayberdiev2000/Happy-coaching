import React from 'react';
import styles from './FAQSection.module.scss';
import FAQ from '@/components/Molecules/FAQ';
import Button from '@/components/Atoms/Button';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Text from '@/components/Atoms/Text';

const Header: React.FC = () => {
  return (
    <header className={styles['faq__header']}>
      <Text
        as="h2"
        variant="headingLg"
        tone="primary"
        className={styles['faq__heading']}
        alignment="center"
      >
        Good to know.
      </Text>
      <Text
        tone="secondary"
        variant="bodyLg"
        className={styles['faq__subheading']}
      >
        Everything you need to know about my services.
      </Text>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <div className={styles['faq__footer']}>
      <div>
        <Text
          tone="primary"
          alignment="center"
          variant="bodyLg"
          fontWeight="bold"
          className={styles['faq__footer__heading']}
        >
          Still have questions?
        </Text>
        <Text
          tone="primary"
          variant="bodyMd"
          className={styles['faq__footer__description']}
        >
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </Text>
      </div>
      <Button>Get in touch</Button>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className={styles['faq']}>
      <MainContainer className={styles['faq__container']}>
        <Header />
        <FAQ />
        <Footer />
      </MainContainer>
    </section>
  );
};

export default FAQSection;
