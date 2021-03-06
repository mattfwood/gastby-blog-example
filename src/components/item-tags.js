import React from 'react';
import { Styled } from 'theme-ui';
import { Link } from 'gatsby';
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config';
import replaceSlashes from '../utils/replaceSlashes';

const ItemTags = ({ tags }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `, `}
          <Styled.a
            as={Link}
            to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
          >
            {tag.name}
          </Styled.a>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default ItemTags;
