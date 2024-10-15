import React from 'react';
import styles from './QualificationCard.module.scss';
import QualificationItem from '@/components/Atoms/QualificationItem';
import Text from '@/components/Atoms/Text';

interface QualificationCardProps {
  advises: string[];
  type?: 'secondary' | 'primary';
}

const QualificationCard: React.FC<QualificationCardProps> = ({
  advises,
  type = 'primary',
}) => {
  return (
    <div className={`${styles['card']} ${styles[`card--${type}`]}`}>
      <Text variant="headingSm" tone="primary" alignment="center">
        This is{' '}
        {type === 'secondary' && (
          <span className={styles['card__not-word']}>NOT</span>
        )}{' '}
        for you if...
      </Text>

      <div className={styles['card__items']}>
        {advises.map((advise, index) => (
          <QualificationItem
            text={advise}
            type={type === 'primary' ? 'good' : 'bad'}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default QualificationCard;
