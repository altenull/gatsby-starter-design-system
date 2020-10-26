import { graphql, useStaticQuery } from 'gatsby';

const useDemoCodeQuery = () => {
  const { demoButton } = useStaticQuery(graphql`
    query {
      demoButton: markdownRemark(fileAbsolutePath: { regex: "/demo-button.md/" }) {
        html
        rawMarkdownBody
      }
    }
  `);

  return {
    demoButton,
  };
};

export default useDemoCodeQuery;
