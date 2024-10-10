import QualificationItem from './QualificationItem';

export const Default = {
  args: {
    type: 'good',
  },
};
export const Good = {
  args: {
    type: 'good',
  },
};
export const Bad = {
  args: {
    type: 'bad',
  },
};

const qualificationItemsConfig = {
  title: 'Atoms/QualificationItem',
  component: QualificationItem,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default qualificationItemsConfig;
