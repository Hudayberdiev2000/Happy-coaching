import React from 'react';
import styles from './DarkModeButton.module.scss';

const DarkModeButton: React.FC = () => {
  const handleButtonClick = () => {
    document.documentElement.classList.toggle('dark-mode');
  };
  return (
    <button onClick={handleButtonClick} className={styles['button']}>
      <svg
        className={styles['button__icon']}
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12 21c4.9706 0 9-4.0294 9-9 0-.0844-.0012-.1684-.0035-.2523-1.1331.7894-2.5108 1.2523-3.9965 1.2523-3.866 0-7-3.13399-7-6.99998 0-1.03271.2236-2.01319.6251-2.89565-4.31795.6619-7.6251 4.39256-7.6251 8.89563 0 4.9706 4.02944 9 9 9z"
          // stroke="#292929"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};

export default DarkModeButton;
