import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';

// 自定义目录导航组件
export default function TOC({className, ...props}) {
  return (
    <div className={clsx(styles.tocWrapper, className)}>
      <h2 className={styles.tocTitle}>目录导航</h2>
      <div className={styles.tocItemsContainer}>
        <TOCItems
          {...props}
          className={clsx('table-of-contents', styles.tableOfContents)}
          linkClassName="table-of-contents__link"
          linkActiveClassName="table-of-contents__link--active"
        />
      </div>
    </div>
  );
}
