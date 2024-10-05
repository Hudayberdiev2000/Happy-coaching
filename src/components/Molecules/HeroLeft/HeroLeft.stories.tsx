import HeroLeft from './HeroLeft';

export const Default = {
  component: HeroLeft,
  args: {
    upheading: 'Proven strategies backed by science for success.',
    heading: 'Live life at the full potential',
    description:
      'I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?',
    btnLabel: 'Get your free guide now',
  },
};

const heroLeftConfig = {
  title: 'Molecules/HeroLeft',
  component: HeroLeft,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default heroLeftConfig;
