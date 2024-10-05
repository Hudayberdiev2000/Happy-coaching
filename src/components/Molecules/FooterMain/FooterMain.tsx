import React from 'react';
import styles from './FooterMain.module.scss';
import Logo from '@/components/Atoms/Logo';
import Link from 'next/link';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';

const FooterMain: React.FC = () => {
  return (
    <div className={styles['footer-main']}>
      <MainContainer>
        <div className={styles['footer-main__container']}>
          <div className={styles['footer-main__about']}>
            <Logo />
            <p className={styles['footer-main__about-text']}>
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className={styles['footer-main__info-div']}>
            <p className={styles['footer-main__div-heading']}>Pages</p>
            <ul className={styles['footer-main__list']}>
              <li className={styles['footer-main__list-item']}>
                <Link className={styles['footer-main__link']} href="#">
                  Home
                </Link>
              </li>
              <li className={styles['footer-main__list-item']}>
                <Link className={styles['footer-main__link']} href="#">
                  Services
                </Link>
              </li>
              <li className={styles['footer-main__list-item']}>
                <Link className={styles['footer-main__link']} href="#">
                  About us
                </Link>
              </li>
              <li className={styles['footer-main__list-item']}>
                <Link className={styles['footer-main__link']} href="#">
                  Extra Sales/Landingpage
                </Link>
              </li>
              <li className={styles['footer-main__list-item']}>
                <Link className={styles['footer-main__link']} href="#">
                  Free guide
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles['footer-main__info-div']}>
            <p className={styles['footer-main__div-heading']}>Contact</p>
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
