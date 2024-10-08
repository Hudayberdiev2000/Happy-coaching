import React from 'react';
import styles from './FAQ.module.scss';
import Accordion from '@/components/Atoms/Accordion';

const FAQ: React.FC = () => {
  return (
    <ul className={styles['accordion']}>
      <li className={styles['accordion__item']}>
        <Accordion
          title="How long does the coaching process take?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
      </li>
      <li className={styles['accordion__item']}>
        <Accordion
          title="What if I wanted to end my coaching engagement?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
      </li>
      <li className={styles['accordion__item']}>
        <Accordion
          title="Can I change through coaching?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
      </li>
      <li className={styles['accordion__item']}>
        <Accordion
          title="How often do we meet?"
          answer="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
      </li>
    </ul>
  );
};

export default FAQ;
