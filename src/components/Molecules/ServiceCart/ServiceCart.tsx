import React from 'react';
import styles from './ServiceCart.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

interface ServiceCartProps {
  iconName: string;
  heading: string;
  description: string;
  withBorder?: boolean;
}

const ServiceCart: React.FC<ServiceCartProps> = ({
  iconName,
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
          src={`/icons/${iconName}`}
          width={72}
          height={72}
          alt={iconName}
        />
      </div>

      <h4 className={styles['service-cart__heading']}>{heading}</h4>

      <p className={styles['service-cart__description']}>{description}</p>
    </div>
  );
};

export default ServiceCart;
