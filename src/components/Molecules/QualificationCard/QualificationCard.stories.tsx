import QualificationCard from './QualificationCard';

const advises = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
];

export const Default = {
  args: {
    advises,
    type: 'primary',
  },
};
export const primary = {
  args: {
    advises,
    type: 'primary',
  },
};
export const Secondary = {
  args: {
    advises,
    type: 'secondary',
  },
};

const qualificationCardConfig = {
  title: 'Molecules/QualificationCard',
  component: QualificationCard,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default qualificationCardConfig;
