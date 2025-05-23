import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Comments() {
  const { colorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();
  const { giscus } = siteConfig.customFields || {};

  // 检测是否为本地开发环境
  const isLocalhost = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  // 如果没有配置 Giscus，则不显示评论区
  if (!giscus) {
    return null;
  }
  
  // 在本地环境中显示提示信息而不是实际的评论系统
  if (isLocalhost) {
    return (
      <div className="comments-wrapper" style={{ marginTop: '30px', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
        <h3>评论功能在本地开发环境中暂时禁用</h3>
        <p>为了避免本地开发环境中的跨域限制和网络问题，评论功能在本地环境中暂时禁用。该功能将在部署到生产环境后自动启用。</p>
      </div>
    );
  }

  return (
    <div className="comments-wrapper" style={{ marginTop: '30px' }}>
      <Giscus
        id="comments"
        repo={giscus.repo}
        repoId={giscus.repoId}
        category={giscus.category}
        categoryId={giscus.categoryId}
        mapping="url"
        strict="0"
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
