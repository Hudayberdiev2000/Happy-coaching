import React from 'react';
import styles from './Header.module.scss';
import Logo from '@/components/Atoms/Logo';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Navbar from '@/components/Molecules/Navbar';
import Link from 'next/link';
import Button from '@/components/Atoms/Button';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <MainContainer>
        <div className={styles['header__container']}>
          <Link href="#" className={styles['header__logo-link']}>
            <Logo />
          </Link>
          <div className={styles['header__navbar-wrapper']}>
            <Navbar />
            <Link href={'/free-guide'}>
              <Button>Get your free guide</Button>
            </Link>
          </div>
        </div>
      </MainContainer>
    </header>
  );
};

export default Header;
