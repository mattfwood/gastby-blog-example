import React from 'react';
import Homepage from '../../../components/homepage';

export default ({ data }) => {
  const { allPost } = data;
  return <Homepage posts={allPost.nodes} />;
};
