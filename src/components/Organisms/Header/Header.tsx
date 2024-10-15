import React from 'react';
import styles from './Header.module.scss';
import Logo from '@/components/Atoms/Logo';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Navbar from '@/components/Molecules/Navbar';
import Link from 'next/link';
import Button from '@/components/Atoms/Button';
import Image from 'next/image';

const Header: React.FC = () => {
  const handleButtonClick = () => {};
  return (
    <header className={styles.header}>
      <MainContainer className={styles['header__container']}>
        <Link href="/" className={styles['header__logo-link']}>
          <Logo />
        </Link>
        <div className={styles['header__navbar-wrapper']}>
          <Navbar />
          <Link href={'/free-guide'}>
            <Button>Get your free guide</Button>
          </Link>

          <button className={styles['header__dark-mode-button']}>
            <Image
              className={styles['header__dark-mode-icon']}
              height={30}
              width={30}
              src={'/icons/mode-dark.svg'}
              alt="moon"
            />
          </button>
        </div>
      </MainContainer>
    </header>
  );
};

export default Header;
