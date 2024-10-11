import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import NavbarItem from '@/components/Atoms/NavbarItem';

const NavbarItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'About us',
    href: 'about-us',
  },
  {
    title: 'Extra Salespage',
    href: 'extra-sales',
  },
];

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles['navbar__nav-list']}>
        {NavbarItems.map(item => (
          <NavbarItem title={item.title} href={item.href} key={item.title} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
