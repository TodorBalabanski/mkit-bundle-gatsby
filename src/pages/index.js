import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Head from '../components/head/head';

const seo = {
  siteDescription: 'This is an amazing description for the index, i.e. home page',
  pageKeywords: 'keyword 1, keyword 11, keyword 111, keyword 1111'
};

const IndexPage = () => (
  <Layout>
    <Head {...seo} />
    <h1>Index Page</h1>
    <Link to="/test">Go to page Test</Link>
  </Layout>
);

export default IndexPage;
