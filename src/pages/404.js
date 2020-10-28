import React, { Fragment } from 'react';
import { CustomHelmet } from '../components/seo';
import useSiteMetadataQuery from '../hooks/useSiteMetadataQuery';

export default () => {
  const { title } = useSiteMetadataQuery();

  const notFoundPageTitle = `Page Not Found | ${title}`;

  return (
    <Fragment>
      <CustomHelmet title={notFoundPageTitle} />
      <div>Page Not Found.</div>
    </Fragment>
  );
};
