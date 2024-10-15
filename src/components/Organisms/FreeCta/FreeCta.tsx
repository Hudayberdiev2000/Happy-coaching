import React from 'react';
import styles from './FreeCta.module.scss';
import Button from '@/components/Atoms/Button';
import Stars from '@/components/Atoms/Stars';
import Image from 'next/image';
import Text from '@/components/Atoms/Text';

const images = [
  {
    name: 'cta1.jpg',
    diameter: 114,
  },
  {
    name: 'cta2.jpg',
    diameter: 58,
  },
  {
    name: 'cta3.jpg',
    diameter: 76,
  },
  {
    name: 'cta4.jpg',
    diameter: 42,
  },
  {
    name: 'cta5.jpg',
    diameter: 62,
  },
];

const FreeCta: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles['cta__upper']}>
        <Text
          as="h2"
          tone="primary"
          variant="headingLg"
          className={styles['cta__heading']}
        >
          Don’t miss out on my{' '}
          <span className={styles['cta__heading__highlight']}>
            {' '}
            ‘Live life at the full potential’
          </span>
          free guide
        </Text>

        <p className={styles['cta__description']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>

        <Button size="large">Download my free guide</Button>
      </div>
      <div className={styles['cta__bottom']}>
        <Text variant="bodySm" tone="subtle">
          More than 100+ 5 star reviews
        </Text>
        <Stars rating={5} />
      </div>
      {images.map((image, index) => (
        <Image
          key={index}
          className={`${styles['cta__img']} ${styles[`cta__img${index + 1}`]}`}
          width={image.diameter}
          height={image.diameter}
          src={`/images/${image.name}`}
          alt="circled image"
        />
      ))}
    </section>
  );
};

export default FreeCta;
