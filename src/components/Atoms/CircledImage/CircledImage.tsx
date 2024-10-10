import React from 'react';
import styles from './CircledImage.module.scss';
import Image from 'next/image';

interface CircledImageProps {
  imageUrl: string;
  diameter: number;
  alt?: string;
}

const CircledImage: React.FC<CircledImageProps> = ({
  imageUrl,
  alt = 'circledImage',
  diameter,
}) => {
  return (
    <Image
      className={styles.image}
      height={diameter}
      width={diameter}
      src={imageUrl}
      alt={alt}
    />
  );
};

export default CircledImage;
