import Button from './Button';

export const Default = {
  args: {
    size: 'medium',
    borderRadius: 'medium',
    children: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    borderRadius: 'small',
    children: 'Button',
  },
};

export const Medium = {
  args: {
    size: 'medium',
    borderRadius: 'medium',
    children: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    borderRadius: 'medium',
    children: 'Button',
  },
};

export const FullWidth = {
  args: {
    size: 'full-width',
    borderRadius: 'medium',
    children: 'Button',
    fullWidth: true,
  },
};

export const RoundedSmall = {
  args: {
    size: 'medium',
    borderRadius: 'rounded-small',
    children: 'Button',
  },
};

export const RoundedMedium = {
  args: {
    size: 'medium',
    borderRadius: 'rounded-medium',
    children: 'Button',
  },
};

const buttonConfig = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default buttonConfig;
