import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadataQuery = () => {
  const {
    site: {
      siteMetadata: { title, description, language, hosts, ids },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          language
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
    language,
    hosts,
    ids,
  };
};

export default useSiteMetadataQuery;
