import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

interface ImageProps {
  className: string;
}

interface ImageQuery {
  placeholderImage: {
    childImageSharp: GatsbyImageFluidProps;
  };
}

class Image extends React.Component<ImageProps> {
  render(): JSX.Element {
    return (
      <StaticQuery<ImageQuery>
        query={graphql`
          query {
            placeholderImage: file(
              relativePath: { eq: "gatsby-astronaut.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data =>
          data.placeholderImage?.childImageSharp?.fluid && (
            <Img
              className={this.props.className}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          )
        }
      />
    );
  }
}

export default Image;
