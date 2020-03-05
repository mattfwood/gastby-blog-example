import React from 'react';
import Page from '../../../components/page';

export default ({ data }) => {
  const { page } = data;

  return <Page data={{ ...data, page }} />;
};
