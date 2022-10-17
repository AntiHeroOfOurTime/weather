import React from 'react';
import { ReactComponent as LoaderIcon } from 'shared/icons/loader.svg';
import styles from './styles.module.css';
interface IProps {
  className?: string;
}

export const Loader = ({ className }: IProps) => {
  return (
    <div className={styles.container}>
      <LoaderIcon className={className} />
    </div>
  );
};
