import React from 'react';
import styles from './MainContainer.module.scss';

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
  align?: 'center' | 'start' | 'end';
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  className,
  align = 'start',
}) => {
  return (
    <div
      className={`${styles['main-container']} ${className} ${`main-container--${align}`}`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
