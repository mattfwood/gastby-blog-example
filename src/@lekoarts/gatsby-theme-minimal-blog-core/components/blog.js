import React from 'react';
import Blog from '../../../components/blog';

export default ({ data }) => {
  const { allPost } = data;
  return <Blog posts={allPost.nodes} />;
};
