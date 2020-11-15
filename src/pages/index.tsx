import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

class IndexPage extends React.Component<PageQuery> {
  render(): JSX.Element {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi {this.props.data.site.siteMetadata.author}</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>{this.props.data.site.siteMetadata.description}</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
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
