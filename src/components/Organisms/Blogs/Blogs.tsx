import React from 'react';
import styles from './Blogs.module.scss';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import BlogCard from '@/components/Molecules/BlogCard';
import Button from '@/components/Atoms/Button';
import { Blogs } from '../../../../data';
import Text from '@/components/Atoms/Text';

const BlogsSection: React.FC = () => {
  return (
    <section className={styles['blogs']}>
      <MainContainer className={styles['blogs__container']}>
        <Text
          variant="headingLg"
          tone="primary"
          alignment="center"
          className={styles['blogs__heading']}
        >
          Stay Motivated, read the weekly blog articles.
        </Text>
        <div className={styles['blogs__cards']}>
          {Blogs.slice(0, 3).map(blog => (
            <BlogCard
              imageUrl={blog.imageUrl}
              title={blog.title}
              description={blog.description}
              key={blog.title}
            />
          ))}
        </div>

        <Button size="large">Read more blogs</Button>
      </MainContainer>
    </section>
  );
};

export default BlogsSection;
