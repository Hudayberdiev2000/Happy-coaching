import React from 'react';
import styles from './QualificationItem.module.scss';
import Image from 'next/image';

interface QualificationItemProps {
  type: 'good' | 'bad';
  text: string;
}

const QualificationItem: React.FC<QualificationItemProps> = ({
  type,
  text,
}) => {
  return (
    <div className={styles['qualification']}>
      <div className={styles['qualification__img-wrapper']}>
        <Image
          className={styles['qualification__img']}
          src={`/icons/${type === 'good' ? 'tic' : 'cross'}.svg`}
          width={24}
          height={24}
          alt="tic or cross"
        />
      </div>
      <p className={styles['qualification__text']}>{text}</p>
    </div>
  );
};

export default QualificationItem;
