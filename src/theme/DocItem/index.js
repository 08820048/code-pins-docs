import React from 'react';
import DocItem from '@theme-original/DocItem';
import Comments from '@site/src/components/Comments';
import BackToTop from '@site/src/components/BackToTop';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <Comments />
      <BackToTop />
    </>
  );
}
