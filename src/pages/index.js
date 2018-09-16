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
    <h1>Hi there!</h1>
    <h3>
      Welcome to the{' '}
      <a href="https://github.com/mkitio/mkit-bundle-gatsby">
        mkit-bundle-gatsby
      </a>{' '}
      template
    </h3>
    <p>
      This project strives to deliver clean folder structure and satisfying
      development experience. <strong>Easy.</strong>
    </p>
    <p>You are all set to start your own project!</p>
    <Link to="/learn-more">Learn More</Link>
  </Layout>
);

export default IndexPage;
