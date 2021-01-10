import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkdownDocument } from '../types/markdown';

import Layout from '../layout/layout';

class ContentTemplate extends React.Component<PageProps & PageQuery> {
  render(): JSX.Element {
    return (
      <Layout>
        <div className="prose sm:prose-lg lg:prose-2xl">
          <div>
            <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
            <h2>{this.props.data.markdownRemark.frontmatter.date}</h2>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: this.props.data.markdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

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
