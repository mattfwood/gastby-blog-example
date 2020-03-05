import React from 'react';
import Tag from '../../../components/tag';

export default ({ data, pageContext }) => {
  const { allPost } = data;

  return <Tag posts={allPost.nodes} pageContext={pageContext} />;
};
