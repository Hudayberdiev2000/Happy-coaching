import SocialProofCard from './SocialProofCard';

export const Default = {
  args: {
    imageUrl: '/icons/social-proof1.svg',
    title: 'Layers',
  },
};

const socialProofCardConfig = {
  title: 'Molecules/SocialProofCard',
  component: SocialProofCard,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default socialProofCardConfig;
