import React from 'react';
import styles from './TestimonialSection.module.scss';
import Button from '@/components/Atoms/Button';
import TestimonialCard from '@/components/Molecules/TestimonialCard';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';

const TestimonialSection: React.FC = () => {
  return (
    <section className={styles['testimonial']}>
      <MainContainer>
        <div className={styles['testimonial__container']}>
          <header className={styles['testimonial__header']}>
            <div className={styles['testimonial__header__text-box']}>
              <p className={styles['testimonial__upheading']}>Testimonials</p>
              <h2 className={styles['testimonial__heading']}>
                Results that speak for themselves
              </h2>
            </div>

            <Button size="large">Get started</Button>
          </header>
          <main className={styles['testimonial__cards']}>
            <div className={styles['testimonial__card-row']}>
              <TestimonialCard
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imageName="Avatar.png"
                firstName="John Doe"
                lastName="Smith"
              />
              <TestimonialCard
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imageName="Avatar.png"
                firstName="John Doe"
                lastName="Smith"
              />
            </div>

            <div className={styles['testimonial__card-row']}>
              <TestimonialCard
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imageName="Avatar.png"
                firstName="John Doe"
                lastName="Smith"
              />
              <TestimonialCard
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imageName="Avatar.png"
                firstName="John Doe"
                lastName="Smith"
              />
            </div>
          </main>
        </div>
      </MainContainer>
    </section>
  );
};

export default TestimonialSection;
