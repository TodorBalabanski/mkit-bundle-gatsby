import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';

const seo = {
  pageTitle: 'Learn More'
};

const LearnMore = ({ location }) => (
  <Layout>
    <Seo {...seo} pathname={location.pathname} />
    <h1>Looks like you made it!</h1>
    <p>
      This is just an empty page, but you can check <strong>README.md</strong>{' '}
      for some tips & tricks.
    </p>
    <p>Happy Hacking!</p>
    <Link to="/">Back to Index</Link>
  </Layout>
);

export default LearnMore;
