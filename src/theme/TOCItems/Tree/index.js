import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

// 自定义的目录树组件，增加了健壮性
export default function TOCItemTree({
  toc,
  className,
  linkClassName,
  linkActiveClassName,
  minHeadingLevel,
  maxHeadingLevel,
}) {
  // 安全检查：确保 toc 是一个数组且有内容
  if (!Array.isArray(toc) || toc.length === 0) {
    return null;
  }

  // 过滤出符合级别要求的标题
  const filteredToc = toc.filter(
    (item) => 
      item &&
      typeof item.value === 'string' &&
      typeof item.id === 'string' &&
      typeof item.level === 'number' &&
      item.level >= minHeadingLevel &&
      item.level <= maxHeadingLevel
  );

  // 如果过滤后没有内容，返回 null
  if (filteredToc.length === 0) {
    return null;
  }

  return (
    <ul className={className}>
      {filteredToc.map((heading) => (
        <li key={heading.id} className={clsx(
          'table-of-contents__list-item',
          `toc-level-${heading.level}`
        )}>
          <Link
            href={`#${heading.id}`}
            className={linkClassName}
            // 避免使用 dangerouslySetInnerHTML
            onClick={(e) => {
              e.preventDefault();
              try {
                const targetElement = document.getElementById(heading.id);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                  // 更新 URL 哈希值
                  window.history.pushState(null, null, `#${heading.id}`);
                }
              } catch (error) {
                console.error('Error scrolling to heading:', error);
                // 回退到默认行为
                window.location.hash = heading.id;
              }
            }}
          >
            {heading.value}
          </Link>
          
          {/* 递归渲染子项 */}
          {heading.children && heading.children.length > 0 && (
            <TOCItemTree
              toc={heading.children}
              className={className}
              linkClassName={linkClassName}
              linkActiveClassName={linkActiveClassName}
              minHeadingLevel={minHeadingLevel}
              maxHeadingLevel={maxHeadingLevel}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
