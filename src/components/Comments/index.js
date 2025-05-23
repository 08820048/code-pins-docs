import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Comments() {
  const { colorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();
  const { giscus } = siteConfig.customFields || {};

  // 如果没有配置 Giscus，则不显示评论区
  if (!giscus) {
    return null;
  }

  return (
    <div className="comments-wrapper" style={{ marginTop: '30px' }}>
      <Giscus
        id="comments"
        repo={giscus.repo}
        repoId={giscus.repoId}
        category={giscus.category}
        categoryId={giscus.categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
