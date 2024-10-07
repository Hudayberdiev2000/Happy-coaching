import FeatureCard from './FeatureCard';

export const Default = {
  args: {
    iconName: 'feature-talk-first.svg',
    title: 'Talk to me first',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};
export const Vertical = {
  args: {
    iconName: 'feature-talk-first.svg',
    title: 'Talk to me first',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    orientation: 'vertical',
  },
};
export const Horizontal = {
  args: {
    iconName: 'feature-talk-first.svg',
    title: 'Talk to me first',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    orientation: 'horizontal',
  },
};

const featureCardConfig = {
  title: 'Molecules/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default featureCardConfig;
