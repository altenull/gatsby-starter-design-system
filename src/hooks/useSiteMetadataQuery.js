import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadataQuery = () => {
  const {
    site: {
      siteMetadata: { title, description, hosts, ids },
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
          ids {
            buyMeACoffee
          }
        }
      }
    }
  `);

  return {
    title,
    description,
    hosts,
    ids,
  };
};

export default useSiteMetadataQuery;
