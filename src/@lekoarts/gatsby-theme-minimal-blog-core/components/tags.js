import React from 'react';
import Tags from '../../../components/tags';

export default ({ data }) => {
  const { allPost } = data;

  return <Tags list={allPost.group} />;
};
