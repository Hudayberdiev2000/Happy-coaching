import React from 'react';
import styles from './CopyrightInfo.module.scss';
import Image from 'next/image';
import MainContainer from '@/components/Atoms/MainContainer/MainContainer';
import Text from '@/components/Atoms/Text';

const CopyrightInfo: React.FC = () => {
  return (
    <div className={styles['copyright-info']}>
      <MainContainer>
        <div className={styles['copyright-info__container']}>
          <Text
            tone="primary"
            variant="body2xs"
            className={styles['copyright-info__text']}
          >
            Copyright © 2024
          </Text>
          <div className={styles['copyright-info__icons']}>
            <Image
              src={`/icons/internet.svg`}
              alt="internet icon"
              width={24}
              height={24}
            />
            <Image
              src={`/icons/facebook.svg`}
              alt="facebook icon"
              width={24}
              height={24}
            />
            <Image src={`/icons/in.svg`} alt="inicon" width={24} height={24} />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default CopyrightInfo;
