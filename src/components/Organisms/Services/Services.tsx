import React from 'react';
import styles from './Services.module.scss';
import ServiceCart from '@/components/Molecules/ServiceCart';
import { Services } from '../../../../data';
import Text from '@/components/Atoms/Text';

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.services}>
      <Text
        as="h2"
        tone="primary"
        variant="headingLg"
        alignment="center"
        className={styles['services__heading']}
      >
        I can help you in these particular areas.
      </Text>
      <ul className={styles['services__cards']}>
        {Services.slice(0, 4).map((service, index) => (
          <li className={styles['services__card']} key={index}>
            <ServiceCart
              iconUrl={service.iconUrl}
              heading={service.heading}
              description={service.description}
              withBorder={true}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
