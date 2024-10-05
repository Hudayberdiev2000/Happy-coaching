import React from 'react';
import styles from './HomePage.module.scss';
import Header from '@/components/Organisms/Header';
import HomeHero from '@/components/Organisms/HomeHero';
import Introduction from '@/components/Organisms/Introduction';
import HomeReview from '@/components/Organisms/HomeReview';
import Blogs from '@/components/Organisms/Blogs';
import FreeGuide from '@/components/Organisms/FreeGuide';
import CTA from '@/components/Organisms/CTA';
import Footer from '@/components/Organisms/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <Introduction />
      <HomeReview />
      <Blogs />
      <FreeGuide />
      <CTA />
      <Footer />
    </>
  );
};

export default HomePage;
