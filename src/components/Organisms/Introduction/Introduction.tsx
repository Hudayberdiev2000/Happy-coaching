import React from 'react';
import styles from './Introduction.module.scss';
import WaveIcon from '@/components/Atoms/WaveIcon';
import ServiceCart from '@/components/Molecules/ServiceCart';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import { Services } from '../../../../data';

const Introduction: React.FC = () => {
  return (
    <section className={styles.introduction}>
      <MainContainer>
        <div className={styles['introduction__container']}>
          <div className={styles['introduction__upper-box']}>
            <div className={styles['introduction__wave-icon']}>
              <WaveIcon color="purple" />
            </div>
            <div className={styles['introduction__upper-inner']}>
              <h2 className={styles['introduction__heading']}>
                I can help you in these particular areas.
              </h2>

              <div className={styles['introduction__paragraphs']}>
                <p className={styles['introduction__paragraph']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  minim veniam.
                </p>
                <p className={styles['introduction__paragraph']}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>

          <div className={styles['introduction__bottom-box']}>
            {Services.slice(0, 3).map((service, index) => (
              <ServiceCart
                iconUrl={service.iconUrl}
                heading={service.heading}
                description={service.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Introduction;
