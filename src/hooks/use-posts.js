import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            projectNumber
            title
            slug
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    projectNumber: post.frontmatter.projectNumber,
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    image2: post.frontmatter.image2,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
