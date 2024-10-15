import React from 'react';
import styles from './SocialProofCard.module.scss';
import Image from 'next/image';
import Text from '@/components/Atoms/Text';

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
      <Text tone="primary" variant="bodyXl" fontWeight="semibold">
        {title}
      </Text>
    </figure>
  );
};

export default SocialProofCard;
