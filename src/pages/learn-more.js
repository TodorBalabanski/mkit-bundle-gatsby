import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';

const seo = {
  pageTitle: 'Learn More'
};

const MorePage = ({ location }) => (
  <Layout>
    <Seo {...seo} pathname={location.pathname} />
    <h1>Learn More Page</h1>
    <Link to="/">Index</Link>
  </Layout>
);

export default MorePage;
