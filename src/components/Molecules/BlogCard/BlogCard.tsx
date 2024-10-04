import React from 'react';
import styles from './BlogCard.module.scss';
import Image from 'next/image';

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
        <h3 className={styles['blog-card__title']}>{title}</h3>
        <p className={styles['blog-card__description']}>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
