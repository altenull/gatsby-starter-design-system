import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery';

const CustomHelmet = ({ title }) => {
  const { description, language, hosts } = useSiteMetadataQuery();

  return (
    <Helmet htmlAttributes={{ lang: language }} defer={false}>
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={hosts.demoSite} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      {/* Preload Strategy - https://www.digitalocean.com/community/tutorials/html-preload-prefetch */}
      <link
        rel='preload'
        as='style'
        onload="this.rel = 'stylesheet'"
        href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap'
      />
    </Helmet>
  );
};

CustomHelmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomHelmet;
