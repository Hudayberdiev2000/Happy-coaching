import React from 'react';
import styles from './FooterCta.module.scss';
import Button from '@/components/Atoms/Button';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Input from '@/components/Atoms/Input';

const FooterCta: React.FC = () => {
  return (
    <div className={styles['footer-cta']}>
      <MainContainer>
        <div className={styles['footer-cta__container']}>
          <div className={styles['footer-cta__left']}>
            <h3 className={styles['footer-cta__heading']}>
              Get notified when I publish new articles
            </h3>
            <p className={styles['footer-cta__text']}>
              Stay up to date with the latest news, announcements, and articles.
            </p>
          </div>

          <div className={styles['footer-cta__right']}>
            <Input placeholder="" />
            <Button size="small">Subscribe</Button>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default FooterCta;
