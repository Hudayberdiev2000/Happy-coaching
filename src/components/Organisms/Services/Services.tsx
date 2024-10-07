import React from 'react';
import styles from './Services.module.scss';
import ServiceCart from '@/components/Molecules/ServiceCart';

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles['services__heading']}>
        I can help you in these particular areas.
      </h2>
      <div className={styles['services__cards']}>
        <div className={styles['services__cards-left']}>
          <ServiceCart
            withBorder={true}
            iconName="service-sessions.svg"
            heading="Group Coaching Sessions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
          />
          <ServiceCart
            withBorder={true}
            iconName="service-consultation.svg"
            heading="Consultation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
          />
        </div>

        <div className={styles['services__cards-right']}>
          <ServiceCart
            withBorder={true}
            iconName="service-coaching.svg"
            heading="Online course"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
          />
          <ServiceCart
            withBorder={true}
            iconName="service-coaching.svg"
            heading="1:1 Coaching"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
