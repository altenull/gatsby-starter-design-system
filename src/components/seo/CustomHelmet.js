import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery';
import PropTypes from 'prop-types';

const CustomHelmet = ({ title }) => {
  const { description, hosts } = useSiteMetadataQuery();

  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={hosts.demoSite} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap' rel='stylesheet' />
    </Helmet>
  );
};

CustomHelmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomHelmet;
