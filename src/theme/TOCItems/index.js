import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  useTOCHighlight,
} from '@docusaurus/theme-common/internal';
import TOCItemTree from './Tree';
import styles from './styles.module.css';

// 简化的目录导航项组件
export default function TOCItems({
  toc,
  className,
  linkClassName,
  linkActiveClassName,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}) {
  const themeConfig = useThemeConfig();
  
  // 添加空值检查，确保 tableOfContents 存在
  const tocConfig = themeConfig.tableOfContents || { minHeadingLevel: 2, maxHeadingLevel: 3 };
  
  const minHeadingLevel =
    minHeadingLevelOption ?? tocConfig.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? tocConfig.maxHeadingLevel;

  const tocRef = useRef(null);
  
  // 检查 toc 是否存在并且有长度
  const hasToc = Array.isArray(toc) && toc.length > 0;
  
  // 使用 Docusaurus 内置的 TOC 高亮功能
  useTOCHighlight({
    tocRef,
    minHeadingLevel,
    maxHeadingLevel,
    linkClassName,
    linkActiveClassName,
  });

  // 如果没有目录内容，则返回空元素
  if (!hasToc) {
    return <div className={clsx(styles.tocItems, className)} />;
  }

  return (
    <div ref={tocRef} className={clsx(styles.tocItems, className)}>
      <TOCItemTree
        toc={toc}
        minHeadingLevel={minHeadingLevel}
        maxHeadingLevel={maxHeadingLevel}
        className={className}
        linkClassName={linkClassName || 'table-of-contents__link'}
        linkActiveClassName={clsx(styles.tocLinkActive, linkActiveClassName || 'table-of-contents__link--active')}
        {...props}
      />
    </div>
  );
}
