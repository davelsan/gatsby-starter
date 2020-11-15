/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

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
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.0875rem 1.45rem`,
              }}
            >
              <main>{this.props.children}</main>
              <footer
                style={{
                  marginTop: `2rem`,
                }}
              >
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
              </footer>
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
