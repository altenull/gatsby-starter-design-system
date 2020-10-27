import { graphql, useStaticQuery } from 'gatsby';

const useDemoCodeQuery = () => {
  const { demoPrimaryButton, demoSecondaryButton } = useStaticQuery(graphql`
    query {
      demoPrimaryButton: markdownRemark(fileAbsolutePath: { regex: "/demo-primary-button.md/" }) {
        html
        rawMarkdownBody
      }
      demoSecondaryButton: markdownRemark(fileAbsolutePath: { regex: "/demo-secondary-button.md/" }) {
        html
        rawMarkdownBody
      }
    }
  `);

  return {
    demoPrimaryButton,
    demoSecondaryButton,
  };
};

export default useDemoCodeQuery;
