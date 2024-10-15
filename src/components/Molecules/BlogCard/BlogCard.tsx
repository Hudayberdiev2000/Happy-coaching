import React from 'react';
import styles from './BlogCard.module.scss';
import Image from 'next/image';
import Text from '@/components/Atoms/Text';

interface BlogCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className={styles['blog-card']}>
      <div className={styles['blog-card__img-wrapper']}>
        <Image
          className={styles['blog-card__img']}
          src={imageUrl}
          width={356}
          height={160}
          alt="blog image"
        />
      </div>
      <div className={styles['blog-card__info-box']}>
        <Text
          as="h4"
          tone="primary"
          variant="headingSm"
          className={styles['blog-card__title']}
        >
          {title}
        </Text>
        <Text className={styles['blog-card__description']}>{description}</Text>
      </div>
    </div>
  );
};

export default BlogCard;
