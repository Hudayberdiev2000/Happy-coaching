import Text from './Text';
import { FC } from 'react';

export const Default = {
  args: {
    as: 'p',
    children: 'Hello, I am a text.',
    alignment: 'center',
    fontWeight: 'regular',
    truncate: false,
    visuallyHidden: false,
    variant: 'bodySm',
    tone: 'secondary',
  },
};

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
