import React from 'react';
import styles from './Introduction.module.scss';
import WaveIcon from '@/components/Atoms/WaveIcon';
import ServiceCart from '@/components/Molecules/ServiceCart';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import { Services } from '../../../../data';
import Text from '@/components/Atoms/Text';

const Introduction: React.FC = () => {
  return (
    <section className={styles.introduction}>
      <MainContainer className={styles['introduction__container']}>
        <div>
          <div className={styles['introduction__wave-icon']}>
            <WaveIcon color="purple" />
          </div>
          <div className={styles['introduction__header']}>
            <Text
              as="h2"
              tone="primary"
              variant="headingLg"
              className={styles['introduction__heading']}
            >
              I can help you in these particular areas.
            </Text>

            <div className={styles['introduction__paragraphs']}>
              <Text
                tone="secondary"
                variant="bodySm"
                className={styles['introduction__paragraph']}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </Text>
              <Text
                tone="secondary"
                variant="bodySm"
                className={styles['introduction__paragraph']}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Text>
            </div>
          </div>
        </div>

        <div className={styles['introduction__cards']}>
          {Services.slice(0, 3).map((service, index) => (
            <ServiceCart
              iconUrl={service.iconUrl}
              heading={service.heading}
              description={service.description}
              key={index}
            />
          ))}
        </div>
      </MainContainer>
    </section>
  );
};

export default Introduction;
