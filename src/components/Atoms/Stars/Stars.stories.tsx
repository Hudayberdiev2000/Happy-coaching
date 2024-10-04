import Stars from './Stars';

export const Default = {
  args: {
    rating: 3,
  },
};

const StarsConfig = {
  title: 'Atoms/Stars',
  component: Stars,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default StarsConfig;
