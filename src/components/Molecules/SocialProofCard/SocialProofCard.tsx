import React from 'react';
import styles from './SocialProofCard.module.scss';
import Image from 'next/image';

interface SocialProofCardProps {
  imageUrl: string;
  title: string;
}

const SocialProofCard: React.FC<SocialProofCardProps> = ({
  imageUrl,
  title,
}) => {
  return (
    <figure className={styles['card']}>
      <Image
        className={styles['card__img']}
        width={44}
        height={44}
        src={imageUrl}
        alt={title}
      />
      <figcaption className={styles['card__title']}>{title}</figcaption>
    </figure>
  );
};

export default SocialProofCard;
