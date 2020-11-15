import React from 'react';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="text-3xl">404: Not Found</h1>
    <p className="sm:text-lg mt-3">
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
  </Layout>
);

export default NotFoundPage;
