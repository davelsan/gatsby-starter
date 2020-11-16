import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import '../css/tailwind.css';
import '../css/layout.css';
import '../css/markdown.css';

class IndexPage extends React.Component<PageQuery> {
  render(): JSX.Element {
    return (
      <Layout>
        <SEO title="Home" />
        <h1 className="text-4xl">
          Hi {this.props.data.site.siteMetadata.author}
        </h1>
        <p className="text-xl mt-3">Welcome to your new Gatsby site.</p>
        <p className="text-base mt-2">
          {this.props.data.site.siteMetadata.description}
        </p>
        <div className="flex flex-col items-center sm:flex-row mt-10 w-full">
          <Image className="w-1/2" />
          <div className="flex flex-col mt-8 sm:mt-0 justify-center">
            <Link
              to="/page-2/"
              className="py-2 px-4 rounded-full bg-purple-700
                         font-medium text-center
                         text-lg text-white"
            >
              Go to page 2
            </Link>{' '}
            <Link
              to="/using-typescript/"
              className="py-2 px-4 mt-6 rounded-full bg-purple-700
                         font-medium text-center
                         text-lg text-white"
            >
              Go to &quot;Using TypeScript&quot;
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

interface PageQuery {
  data: {
    site: {
      siteMetadata: {
        author: string;
        description: string;
      };
    };
  };
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`;

export default IndexPage;
