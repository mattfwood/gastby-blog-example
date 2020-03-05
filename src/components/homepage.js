/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Layout from './layout';
// @ts-ignore
import Hero from '../texts/hero';
// @ts-ignore
import Bottom from '../texts/bottom';
import Title from './title';
import Listing from './listing';
import List from './list';
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config';
import replaceSlashes from '../utils/replaceSlashes';

const Homepage = ({ posts }) => {
  const { basePath, blogPath } = useMinimalBlogConfig();

  return (
    <Layout>
      <section sx={{ mb: [5, 5, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List>
        <Bottom />
      </List>
    </Layout>
  );
};

export default Homepage;
