import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadataQuery = () => {
  const {
    site: {
      siteMetadata: { title, description, hosts },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          hosts {
            demoSite
          }
        }
      }
    }
  `);

  return {
    title,
    description,
    hosts,
  };
};

export default useSiteMetadataQuery;
