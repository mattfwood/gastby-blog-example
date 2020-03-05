import React from 'react';
import Post from '../../../components/post';

export default ({ data }) => {
  const { post } = data;

  return <Post data={{ ...data, post }} />;
};
