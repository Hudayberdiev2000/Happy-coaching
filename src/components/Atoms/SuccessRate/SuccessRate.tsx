import React from 'react';
import styles from './SuccessRate.module.scss';
import Image from 'next/image';

const SuccessRate: React.FC = () => {
  return (
    <div className={styles['success-rate']}>
      <div className={styles['success-rate__icon-wrapper']}>
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.5497 11.4507C40.9283 17.8292 40.9283 28.1709 34.5497 34.5495C28.1712 40.928 17.8295 40.928 11.4509 34.5495C5.07235 28.1709 5.07235 17.8292 11.4509 11.4507C17.8295 5.07211 28.1712 5.07211 34.5497 11.4507Z"
            stroke="#20AD96"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.2995 19.7001C28.122 21.5225 28.122 24.4773 26.2995 26.2998C24.4771 28.1222 21.5223 28.1222 19.6998 26.2998C17.8774 24.4773 17.8774 21.5225 19.6998 19.7001C21.5223 17.8776 24.4771 17.8776 26.2995 19.7001"
            stroke="#333461"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 44.0001V34.6667"
            stroke="#20AD96"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 2V11.3333"
            stroke="#20AD96"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3333 23H2"
            stroke="#20AD96"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.0003 23H34.667"
            stroke="#20AD96"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles['success-rate__info-box']}>
        <p className={styles['success-rate__percentage']}>100%</p>
        <p className={styles['success-rate__desciption']}>
          Success rate this year
        </p>
      </div>
    </div>
  );
};

export default SuccessRate;
