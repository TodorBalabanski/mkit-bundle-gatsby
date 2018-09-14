import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';

const seo = {
  pageTitle: 'Welcome'
};

const IndexPage = ({ location }) => (
  <Layout>
    <Seo {...seo} pathname={location.pathname} />
    <h1>Index Page</h1>
    <Link to="/learn-more">Learn More</Link>
  </Layout>
);

export default IndexPage;
