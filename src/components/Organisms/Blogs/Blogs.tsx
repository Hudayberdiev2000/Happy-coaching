import React from 'react';
import styles from './Blogs.module.scss';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import BlogCard from '@/components/Molecules/BlogCard';
import Button from '@/components/Atoms/Button';

const blogs = [
  {
    imageUrl: '/images/blogCard1.png',
    title: 'Balancing your love and work life.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
  },
  {
    imageUrl: '/images/blogCard2.png',
    title: 'A short break from Social Media is important.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
  },
  {
    imageUrl: '/images/blogCard3.png',
    title: 'How to be 1% Better Every Day',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam',
  },
];

const Blogs: React.FC = () => {
  return (
    <section className={styles['blogs']}>
      <MainContainer>
        <div className={styles['blogs__container']}>
          <h2 className={styles['blogs__heading']}>
            Stay Motivated, read the weekly blog articles.
          </h2>
          <div className={styles['blogs__cards']}>
            {blogs.map(blog => (
              <BlogCard
                imageUrl={blog.imageUrl}
                title={blog.title}
                description={blog.description}
                key={blog.title}
              />
            ))}
          </div>

          <Button size="large">Read more blogs</Button>
        </div>
      </MainContainer>
    </section>
  );
};

export default Blogs;
