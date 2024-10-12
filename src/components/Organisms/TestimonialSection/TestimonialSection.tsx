import React from 'react';
import styles from './TestimonialSection.module.scss';
import Button from '@/components/Atoms/Button';
import TestimonialCard from '@/components/Molecules/TestimonialCard';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import { Testimonials } from '../../../../data';

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
          <ul className={styles['testimonial__cards']}>
            {Testimonials.slice(0, 4).map(testimonial => (
              <li className={styles['testimonial__card']} key={testimonial.id}>
                <TestimonialCard
                  description={testimonial.description}
                  firstName={testimonial.firstName}
                  lastName={testimonial.lastName}
                  imageUrl={testimonial.imageUrl}
                />
              </li>
            ))}
          </ul>
        </div>
      </MainContainer>
    </section>
  );
};

export default TestimonialSection;
