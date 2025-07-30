import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
import styled from 'styled-components';
import { Main } from '@styles';
import config from '@config';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Jobs data={data.jobs.edges} />
      <Featured data={data.featured.edges} />
      <Projects data={data.projects.edges} />
      <Contact data={data.contact.edges} />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export function Head() {
  return (
    <>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title>{config.siteTitle}</title>
      <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
      <link rel="canonical" href={config.siteUrl} />
      <meta name="description" content={config.siteDescription} />
      <meta name="keywords" content={config.siteKeywords} />
      <meta name="google-site-verification" content={config.googleVerification} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:description" content={config.siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:site_name" content={config.siteTitle} />
      <meta property="og:image" content={`${config.siteUrl}/images/og.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content={config.siteLanguage} />
      <meta itemProp="name" content={config.siteTitle} />
      <meta itemProp="description" content={config.siteDescription} />
      <meta itemProp="image" content={`${config.siteUrl}/images/og.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:site" content={config.twitterHandle} />
      <meta name="twitter:creator" content={config.twitterHandle} />
      <meta name="twitter:title" content={config.siteTitle} />
      <meta name="twitter:description" content={config.siteDescription} />
      <meta name="twitter:image" content={`${config.siteUrl}/images/og.png`} />
      <meta name="twitter:image:alt" content={config.siteTitle} />
      <meta name="msapplication-TileColor" content={config.navyColor} />
      <meta name="theme-color" content={config.navyColor} />
    </>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            contactText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                gatsbyImageData(width: 700, quality: 90, placeholder: BLURRED)
              }
            }
            skills
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                gatsbyImageData(width: 700, quality: 90, placeholder: BLURRED)
              }
            }
            tech
            github
            external
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            github
            external
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
