import Accordion from './Accordion';

export const Default = {
  component: Accordion,
  title: 'Molecules/Accordion',
  args: {
    title: 'How long does the coaching process take?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
};

const AccordionConfig = {
  title: 'Atoms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default AccordionConfig;
