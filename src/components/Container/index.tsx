import React from 'react';
import styles from './index.less';

export default (props: React.Props<any>) => {
  const { children } = props;

  return (
    <div className={styles.body}>
      {children}
    </div>
  )
}
