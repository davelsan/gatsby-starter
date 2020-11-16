export interface MarkdownDocument {
  html: string;
  frontmatter: {
    date: string;
    slug: string;
    title: string;
  };
}

export interface MarkdownQuery {
  allMarkdownRemark: {
    edges: Array<{
      node: MarkdownDocument;
    }>;
  };
}
