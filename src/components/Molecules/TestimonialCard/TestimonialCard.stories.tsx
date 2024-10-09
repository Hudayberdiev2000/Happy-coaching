import TestimonialCard from './TestimonialCard';

export const Default = {
  args: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageName: 'Avatar.png',
    firstName: 'John Doe',
    lastName: 'Smith',
  },
};

const testimonialCardConfig = {
  title: 'Molecules/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default testimonialCardConfig;
