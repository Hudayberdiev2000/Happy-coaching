import ServiceCart from './ServiceCart';

export const Default = {
  args: {
    iconName: 'service-coaching.svg',
    heading: '1:1 Coaching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.',
  },
};

export const Bordered = {
  args: {
    iconName: 'service-coaching.svg',
    heading: '1:1 Coaching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.',
    withBorder: true,
  },
};

const serviceCartConfig = {
  title: 'Molecules/ServiceCart',
  component: ServiceCart,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default serviceCartConfig;
