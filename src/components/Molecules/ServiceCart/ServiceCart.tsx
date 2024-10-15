import React from 'react';
import styles from './ServiceCart.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import Text from '@/components/Atoms/Text';

interface ServiceCartProps {
  iconUrl: string;
  heading: string;
  description: string;
  withBorder?: boolean;
}

const ServiceCart: React.FC<ServiceCartProps> = ({
  iconUrl,
  heading,
  description,
  withBorder = false,
}) => {
  return (
    <div
      className={clsx(styles['service-cart'], {
        [styles['service-cart--with-border']]: withBorder,
      })}
    >
      <div className={styles['service-cart__icon-wrapper']}>
        <Image
          className={styles['service-cart__icon']}
          src={iconUrl}
          width={72}
          height={72}
          alt={iconUrl}
        />
      </div>

      <Text variant="headingSm" className={styles['service-cart__heading']}>
        {heading}
      </Text>

      <Text
        tone="secondary"
        variant="bodySm"
        className={styles['service-cart__description']}
      >
        {description}
      </Text>
    </div>
  );
};

export default ServiceCart;
