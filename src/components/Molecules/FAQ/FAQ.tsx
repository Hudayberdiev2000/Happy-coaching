import React from 'react';
import styles from './FAQ.module.scss';
import Accordion from '@/components/Atoms/Accordion';
import { Questions } from '../../../../data';

interface FAQProps {
  questionNumber?: number;
}

const FAQ: React.FC<FAQProps> = ({ questionNumber = 4 }) => {
  return (
    <ul className={styles['accordion']}>
      {Questions.slice(0, questionNumber).map(question => (
        <li className={styles['accordion__item']} key={question.id}>
          <Accordion
            question={question.question}
            answer={question.answer}
            key={question.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default FAQ;
