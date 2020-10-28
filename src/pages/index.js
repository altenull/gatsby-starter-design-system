import React, { Fragment } from 'react';
import { Layout } from '../components/foundation';
import { CodeDemoSection, HeroSection } from '../components/home';
import { CustomHelmet } from '../components/seo';
import useSiteMetadataQuery from '../hooks/useSiteMetadataQuery';

export default () => {
  const { title } = useSiteMetadataQuery();

  const homePageTitle = `Home | ${title}`;

  return (
    <Fragment>
      <CustomHelmet title={homePageTitle} />

      <Layout>
        <HeroSection />
        <CodeDemoSection />
      </Layout>
    </Fragment>
  );
};
