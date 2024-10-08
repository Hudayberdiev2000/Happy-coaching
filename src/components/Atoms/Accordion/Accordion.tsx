'use client';

import React from 'react';
import styles from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles['accordion']}>
      <button
        className={styles['accordion__button']}
        onClick={handleToggleClick}
      >
        <span>{title}</span>
        <span className={styles['accordion__icon-wrapper']}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                isExpanded
                  ? 'M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
                  : 'M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
              }
              stroke="#20AD96"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isExpanded && (
        <div className={styles['accordion__answer']}>{answer}</div>
      )}
    </div>
  );
};

export default Accordion;
