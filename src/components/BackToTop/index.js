import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件，控制按钮显示和隐藏
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 点击返回顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`${styles.backToTopButton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="返回顶部"
      title="返回顶部"
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M8 3L14 9L12.6 10.4L8.8 6.6V13H7.2V6.6L3.4 10.4L2 9L8 3Z" 
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
