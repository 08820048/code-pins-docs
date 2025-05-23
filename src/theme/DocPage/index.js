import React from 'react';
import DocPage from '@theme-original/DocPage';
import TOCHighlight from '@site/src/theme/TOCHighlight';

export default function DocPageWrapper(props) {
  return (
    <>
      <DocPage {...props} />
      <TOCHighlight />
    </>
  );
}
