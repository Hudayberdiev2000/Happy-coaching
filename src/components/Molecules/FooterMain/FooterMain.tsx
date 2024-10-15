import React from 'react';
import styles from './FooterMain.module.scss';
import Logo from '@/components/Atoms/Logo';
import Link from 'next/link';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Text from '@/components/Atoms/Text';

const pages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'About me',
    href: '/about-me',
  },
  {
    title: 'Extra Sales/Landingpage',
    href: '/extra-sales',
  },
  {
    title: 'Free guide',
    href: '/free-guide',
  },
];

const FooterMain: React.FC = () => {
  return (
    <div className={styles['footer-main']}>
      <MainContainer>
        <div className={styles['footer-main__container']}>
          <div className={styles['footer-main__about']}>
            <Logo />
            <Text tone="subtle">
              Design amazing digital experiences that create more happy in the
              world.
            </Text>
          </div>

          <div className={styles['footer-main__info-div']}>
            <Text variant="bodySm" fontWeight="extraBold">
              Pages
            </Text>
            <ul className={styles['footer-main__list']}>
              {pages.map((page, index) => (
                <li className={styles['footer-main__list-item']} key={index}>
                  <Link
                    className={styles['footer-main__link']}
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['footer-main__info-div']}>
            <Text variant="bodySm" fontWeight="extraBold">
              Contact
            </Text>
            <ul className={styles['footer-main__list']}>
              <li className={styles['footer-main__list-item']}>+123 456 789</li>
              <li className={styles['footer-main__list-item']}>
                hello@happydigital.nl
              </li>
              <li className={styles['footer-main__list-item']}>Instagram</li>
              <li className={styles['footer-main__list-item']}>LinkedIn</li>
            </ul>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default FooterMain;
