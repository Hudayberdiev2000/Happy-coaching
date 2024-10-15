import React from 'react';
import styles from './QualificationSection.module.scss';
import QualificationCard from '@/components/Molecules/QualificationCard';
import { Advises as advises } from '../../../../data';
import Text from '@/components/Atoms/Text';

const QualificationSection: React.FC = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['section__upper']}>
        <Text tone="subtle" variant="bodySm">
          This is not for everyone!
        </Text>
        <Text
          tone="primary"
          as="h2"
          variant="headingLg"
          className={styles['section__heading']}
          alignment="center"
        >
          This program is perfect for you if...
        </Text>
      </div>
      <div className={styles['section__cards']}>
        <QualificationCard advises={advises} type="secondary" />
        <QualificationCard advises={advises} />
      </div>
    </section>
  );
};

export default QualificationSection;
