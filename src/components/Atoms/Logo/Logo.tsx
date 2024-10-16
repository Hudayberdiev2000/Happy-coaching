import React from 'react';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <figure className={styles.logo}>
      <div className={styles['logo__left']}>
        <div className={styles['logo__hexagon']}>
          <svg
            className={styles['logo__icon']}
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.831543 10.4784L3.35079 7.95916H9.229C9.45172 7.95916 9.6653 7.87071 9.82279 7.71321C9.98026 7.55574 10.0687 7.34214 10.0687 7.11942V2.08095C10.0687 1.85824 9.98026 1.64466 9.82279 1.48716C9.6653 1.32969 9.45172 1.24121 9.229 1.24121H1.67128C1.44857 1.24121 1.23499 1.32969 1.07749 1.48716C0.920019 1.64466 0.831543 1.85824 0.831543 2.08095V10.4784Z"
              stroke="white"
              strokeWidth="1.60647"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <figcaption className={styles['logo__right']}>Happy Coaching</figcaption>
    </figure>
  );
};

export default Logo;
