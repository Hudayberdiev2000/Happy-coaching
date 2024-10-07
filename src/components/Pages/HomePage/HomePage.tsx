import React from 'react';
import HomeHero from '@/components/Organisms/HomeHero';
import Introduction from '@/components/Organisms/Introduction';
import HomeReview from '@/components/Organisms/HomeReview';
import Blogs from '@/components/Organisms/Blogs';
import FreeGuide from '@/components/Organisms/FreeGuide';
import CTA from '@/components/Organisms/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <Introduction />
      <HomeReview />
      <Blogs />
      <FreeGuide />
      <CTA />
    </>
  );
};

export default HomePage;
