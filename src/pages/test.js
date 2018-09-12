import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Head from '../components/head/head';

const seo = {
  siteDescription: 'This is an shocking description for the test page',
  pageTitle: 'Test',
  pageKeywords: 'keyword 2, keyword 22, keyword 222, keyword 2222'
};

const SecondPage = () => (
  <Layout>
    <Head {...seo} />
    <h1>Test Page</h1>
    <Link to="/">Go to page Index</Link>
  </Layout>
);

export default SecondPage;
