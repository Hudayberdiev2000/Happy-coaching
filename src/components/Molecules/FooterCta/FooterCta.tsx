import React from 'react';
import styles from './FooterCta.module.scss';
import Button from '@/components/Atoms/Button';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Input from '@/components/Atoms/Input';
import Text from '@/components/Atoms/Text';

const FooterCta: React.FC = () => {
  return (
    <div className={styles['footer-cta']}>
      <MainContainer className={styles['footer-cta__container']}>
        <div className={styles['footer-cta__left']}>
          <Text as="h3" variant="headingMd" tone="primary">
            Get notified when I publish new articles
          </Text>

          <Text tone="secondary" variant="bodyMd">
            Stay up to date with the latest news, announcements, and articles.
          </Text>
        </div>

        <div className={styles['footer-cta__right']}>
          <Input placeholder="Your email" />
          <Button size="small">Subscribe</Button>
        </div>
      </MainContainer>
    </div>
  );
};

export default FooterCta;
