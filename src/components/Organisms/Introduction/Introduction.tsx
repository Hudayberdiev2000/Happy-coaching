import React from 'react';
import styles from './Introduction.module.scss';
import WaveIcon from '@/components/Atoms/WaveIcon';
import ServiceCart from '@/components/Molecules/ServiceCart';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';

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
            <ServiceCart
              iconName="service-coaching.svg"
              heading="1:1 Coaching"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
            />
            <ServiceCart
              iconName="service-consultation.svg"
              heading="Consultation"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
            />
            <ServiceCart
              iconName="service-sessions.svg"
              heading="Group Coaching Sessions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Introduction;
