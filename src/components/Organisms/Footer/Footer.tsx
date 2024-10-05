import React from 'react';
import styles from './Footer.module.scss';
import FooterCta from '@/components/Molecules/FooterCta';
import FooterMain from '@/components/Molecules/FooterMain';
import CopyrightInfo from '@/components/Molecules/CopyrightInfo';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterCta />
      <FooterMain />
      <CopyrightInfo />
    </footer>
  );
};

export default Footer;
