import React from 'react';
import { graphql } from 'gatsby';
import { MarkdownDocument } from '../types/markdown';

import Layout from '../layout/layout';

const ContentTemplate: React.FC<PageQuery> = ({ data }) => {
  return (
    <Layout>
      <div className="prose sm:prose-lg lg:prose-2xl">
        <div>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <h2>{data.markdownRemark.frontmatter.date}</h2>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

interface PageQuery {
  data: {
    markdownRemark: MarkdownDocument;
  };
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export default ContentTemplate;
