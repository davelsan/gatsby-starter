/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

interface SiteTitleQuery {
  site: {
    siteMetadata?: {
      title: string;
    };
  };
}

const Layout: React.FC = ({ children }) => {
  const { site } = useStaticQuery<SiteTitleQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header siteTitle={site.siteMetadata?.title || `Title`} />
      <main className="flex flex-grow flex-col h-full w-full items-center px-10 mt-8">
        <div className="max-w-screen-lg">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
