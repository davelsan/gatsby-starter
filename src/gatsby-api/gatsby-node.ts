import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import { MarkdownQuery } from '../types/markdown';

const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;
  const result = await graphql<MarkdownQuery>(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: resolve(__dirname, '../templates/content-template.tsx'),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};

const NodeAPI: GatsbyNode = {
  createPages,
};

export default NodeAPI;
