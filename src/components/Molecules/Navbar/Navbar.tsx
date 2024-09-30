import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles['navbar__nav-list']}>
        <li className={styles['navbar__nav-item']}>
          <Link href={`#`} className={styles['navbar__nav-link']}>
            Home
          </Link>
        </li>

        <li className={styles['navbar__nav-item']}>
          <Link href={`#`} className={styles['navbar__nav-link']}>
            Services
          </Link>
        </li>

        <li className={styles['navbar__nav-item']}>
          <Link href={`#`} className={styles['navbar__nav-link']}>
            About us
          </Link>
        </li>
        <li className={styles['navbar__nav-item']}>
          <Link href={`#`} className={styles['navbar__nav-link']}>
            Extra Salespage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
