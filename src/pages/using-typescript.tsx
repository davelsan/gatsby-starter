// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const UsingTypescript: React.FC<PageProps<PageQuery>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don&apos;t support TypeScript yet.
    </p>
    <p>
      For type checking you can use <em>yarn tscheck</em> and{" "}
      <em>yarn tscheck:watch</em>.
    </p>
    <p>
      You&apos;re currently on the page &quot;{path}&quot; which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export interface PageQuery {
  site: {
    buildTime: string;
  };
}

export const pageQuery = graphql`
  query {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;

export default UsingTypescript;
