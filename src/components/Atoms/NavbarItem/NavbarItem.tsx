import React from 'react';
import styles from './NavbarItem.module.scss';
import Link from 'next/link';

interface NavbarItemProps {
  title: string;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, title }) => {
  return (
    <li className={styles['nav-item']}>
      <Link href={href} className={styles['nav-link']}>
        {title}
      </Link>
    </li>
  );
};

export default NavbarItem;
