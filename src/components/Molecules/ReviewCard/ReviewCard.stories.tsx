import ReviewCard from './ReviewCard';

export const Default = {
  args: {
    commenter: 'Jane',
    rating: 4,
    comment:
      'I gained so much confidence in my ability to connect and deepen my relationships with people. ',
    imageUrl: '/images/review-image1.png',
  },
};

const configReviewCard = {
  title: 'Molecules/ReviewCard',
  component: ReviewCard,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
};

export default configReviewCard;
