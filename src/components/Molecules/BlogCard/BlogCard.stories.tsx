import BlogCard from './BlogCard';

export const Default = {
  args: {
    imageUrl: '/images/blogCard1.png',
    title: 'Balancing your love and work life.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
  },
};

const blogCardConfig = {
  title: 'Molecules/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default blogCardConfig;
