import React from 'react';
import styles from './QualificationSection.module.scss';
import QualificationCard from '@/components/Molecules/QualificationCard';

const advises = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
];

const QualificationSection: React.FC = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['section__upper']}>
        <p className={styles['section__upheading']}>
          This is not for everyone!
        </p>
        <h2 className={styles['section__heading']}>
          This program is perfect for you if...
        </h2>
      </div>
      <div className={styles['section__cards']}>
        <QualificationCard advises={advises} type="secondary" />
        <QualificationCard advises={advises} />
      </div>
    </section>
  );
};

export default QualificationSection;
