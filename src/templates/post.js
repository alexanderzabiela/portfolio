import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Section from '../components/section';
import SectionContainer from '../components/section-container';
import SectionTitle from '../components/section-title';
import TwoCol from '../components/two-col';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

const shortcodes = {
  TwoCol,
};

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Section color="#333333">
      <SectionContainer>
        <SectionTitle
          color="#fed136"
          css={css`
            color: white;
          `}
        >
          &lt;<span>{post.frontmatter.title} </span>/&gt;
        </SectionTitle>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        {/* <ReadLink to="/">&larr; back to all posts</ReadLink> */}
      </SectionContainer>
    </Section>
  </Layout>
);

export default PostTemplate;
