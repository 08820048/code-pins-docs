import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

// 自定义的目录高亮增强功能
export default function TOCHighlight() {
  const location = useLocation();

  useEffect(() => {
    // 安全的查询选择器函数
    const safeQuerySelector = (selector) => {
      try {
        return document.querySelectorAll(selector);
      } catch (error) {
        console.error(`Error querying selector ${selector}:`, error);
        return [];
      }
    };

    const updateTOCHighlight = () => {
      // 检查文档是否存在
      if (!document || !document.querySelectorAll) {
        return;
      }

      // 获取所有标题元素
      const headingElements = safeQuerySelector('h2, h3, h4, h5, h6');
      const headings = Array.from(headingElements).filter(
        heading => heading && heading.id
      );

      if (headings.length === 0) {
        return;
      }

      // 获取所有目录链接
      const tocLinkElements = safeQuerySelector('.table-of-contents__link');
      const tocLinks = Array.from(tocLinkElements);
      
      if (tocLinks.length === 0) {
        return;
      }

      // 清除所有活动状态
      tocLinks.forEach(link => {
        if (link && link.classList) {
          link.classList.remove('table-of-contents__link--active');
        }
      });

      // 找到当前可见的标题
      let activeHeadingId = null;
      const scrollPosition = window.scrollY + 100; // 添加偏移量以提前高亮

      // 从下往上查找第一个在视图中的标题
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && typeof heading.offsetTop === 'number' && heading.offsetTop <= scrollPosition) {
          activeHeadingId = heading.id;
          break;
        }
      }

      // 如果没有找到活动标题，使用第一个标题
      if (!activeHeadingId && headings.length > 0 && headings[0]) {
        activeHeadingId = headings[0].id;
      }

      // 高亮对应的目录链接
      if (activeHeadingId) {
        const activeLink = tocLinks.find(
          link => link && link.getAttribute && link.getAttribute('href') === `#${activeHeadingId}`
        );

        if (activeLink && activeLink.classList) {
          activeLink.classList.add('table-of-contents__link--active');
          
          // 确保活动链接在视图中
          const tocContainer = document.querySelector('.tocItemsContainer');
          if (tocContainer && typeof tocContainer.getBoundingClientRect === 'function') {
            const containerRect = tocContainer.getBoundingClientRect();
            const activeLinkRect = activeLink.getBoundingClientRect();
            
            // 检查活动链接是否在容器视图之外
            if (
              activeLinkRect.top < containerRect.top ||
              activeLinkRect.bottom > containerRect.bottom
            ) {
              // 检查所有必要的属性是否存在
              if (
                typeof activeLink.offsetTop === 'number' &&
                typeof tocContainer.offsetTop === 'number' &&
                containerRect.height &&
                activeLinkRect.height
              ) {
                // 计算滚动位置，使活动链接在容器中间
                const scrollTop = 
                  activeLink.offsetTop - 
                  tocContainer.offsetTop - 
                  (containerRect.height / 2) + 
                  (activeLinkRect.height / 2);
                
                // 确保 scrollTo 方法存在
                if (typeof tocContainer.scrollTo === 'function') {
                  tocContainer.scrollTo({
                    top: scrollTop,
                    behavior: 'smooth'
                  });
                }
              }
            }
          }
        }
      }
    };

    // 安全地初始化高亮
    try {
      updateTOCHighlight();
    } catch (error) {
      console.error('Error initializing TOC highlight:', error);
    }

    // 安全地添加滚动事件监听器
    try {
      window.addEventListener('scroll', updateTOCHighlight, { passive: true });
    } catch (error) {
      console.error('Error adding scroll listener:', error);
    }

    return () => {
      // 安全地移除滚动事件监听器
      try {
        window.removeEventListener('scroll', updateTOCHighlight);
      } catch (error) {
        console.error('Error removing scroll listener:', error);
      }
    };
  }, [location.pathname]);

  // 这是一个纯逻辑组件，不需要渲染任何内容
  return null;
}
