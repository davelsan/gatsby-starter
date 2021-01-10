// If you don't want to use TypeScript you can delete this file!
import React from 'react';
import { graphql, navigate, PageProps } from 'gatsby';

import Layout from '../layout/layout';
import SEO from '../components/seo';

const UsingTypescript: React.FC<PageProps & PageQuery> = ({ data, path }) => {
  const onButtonClick: React.EventHandler<
    React.FormEvent<HTMLButtonElement>
  > = () => {
    navigate('/');
  };

  return (
    <Layout>
      <SEO title="Using TypeScript" />
      <h1 className="text-2xl sm:text-3xl">
        Gatsby supports TypeScript by default!
      </h1>
      <p className="sm:text-lg mt-3">
        This means that you can create and write <em>.ts/.tsx</em> files for
        your pages, components etc. Please note that the <em>gatsby-*.js</em>{' '}
        files (like gatsby-node.js) currently don&apos;t support TypeScript yet.
      </p>
      <p className="sm:text-lg mt-2">
        For type checking you can use <em>yarn tscheck</em> and{' '}
        <em>yarn tscheck:watch</em>.
      </p>
      <p className="sm:text-lg mt-2">
        You&apos;re currently on the page &quot;{path}&quot; which was built on{' '}
        {data.site.buildTime}.
      </p>
      <p className="sm:text-lg mt-2">
        To learn more, head over to our{' '}
        <a href="https://www.gatsbyjs.com/docs/typescript/">
          documentation about TypeScript
        </a>
        .
      </p>
      <button
        className="py-2 px-4 mt-10
                 focus:outline-none rounded-full bg-purple-700
                 font-medium text-center text-lg text-white"
        onClick={onButtonClick}
      >
        Go back to the homepage
      </button>
    </Layout>
  );
};

export interface PageQuery {
  data: {
    site: {
      buildTime: string;
    };
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
