import React from 'react';
import DocItem from '@theme-original/DocItem';
import Comments from '@site/src/components/Comments';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <Comments />
    </>
  );
}
