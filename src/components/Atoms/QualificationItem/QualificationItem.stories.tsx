import QualificationItem from './QualificationItem';

export const Default = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    type: 'good',
  },
};
export const Good = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    type: 'good',
  },
};
export const Bad = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
