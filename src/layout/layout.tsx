/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

interface SiteTitleQuery {
  site: {
    siteMetadata?: {
      title: string;
    };
  };
}

class Layout extends React.Component {
  render(): JSX.Element {
    return (
      <StaticQuery<SiteTitleQuery>
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main className="flex flex-col items-center px-10 mt-24 sm:mt-32">
              <div className="max-w-screen-lg">{this.props.children}</div>
            </main>
            <Footer />
          </>
        )}
      />
    );
  }
}

export default Layout;
