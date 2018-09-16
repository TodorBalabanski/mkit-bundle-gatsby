import React from 'react';
import Layout from '../components/layout/layout';

const NotFoundPage = () => (
  <Layout>
    <h1>404 Page Not Found</h1>
    <p>
      Do not worry! Incorrect URLs will lead your users here when running in
      production mode.
    </p>
    <i>You might want to customize this page...</i>
  </Layout>
);

export default NotFoundPage;
