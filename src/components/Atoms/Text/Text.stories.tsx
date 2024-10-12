import Text from './Text';
import { FC } from 'react';

export const Default = {};

const textConfig = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  decorators: [
    (Story: FC) => (
      <div style={{ backgroundColor: '#faf8f6' }}>
        <Story />
      </div>
    ),
  ],
};

export default textConfig;
