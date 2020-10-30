import { Link } from 'gatsby';
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { BlankCanvasImage } from '../components/404';
import { Logo } from '../components/foundation';
import { CustomHelmet } from '../components/seo';
import { Button } from '../components/ui';
import useSiteMetadataQuery from '../hooks/useSiteMetadataQuery';

const StdContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 32px 0;

  ${(props) => props.theme.mediaQueries.viewPort9} {
    flex-direction: row;
    padding: 112px 0 0;
  }
`;

const StdCopyWrapper = styled.div`
  margin: 0 auto 32px;

  ${(props) => props.theme.mediaQueries.viewPort9} {
    margin: auto 0;
  }
`;

const StdLogo = styled(Logo)`
  margin-bottom: 16px;
`;

const StdTitle = styled.h1`
  margin-bottom: 16px;
`;

const StdDescription = styled.p`
  margin-bottom: 32px;
`;

const StdBlankCanvasImage = styled(BlankCanvasImage)`
  width: 320px;
  height: auto;
  margin: 0 auto;

  ${(props) => props.theme.mediaQueries.viewPort9} {
    width: 360px;
    margin: 0 0 0 56px;
  }
`;

const linkStyles = css`
  &:hover {
    text-decoration: none;
  }
`;

export default () => {
  const { title } = useSiteMetadataQuery();

  const notFoundPageTitle = `Page Not Found | ${title}`;

  return (
    <Fragment>
      <CustomHelmet title={notFoundPageTitle} />
      <StdContentHolder>
        <StdCopyWrapper>
          <StdLogo />
          <StdTitle>Page not found.</StdTitle>
          <StdDescription>We can't seem to find the page you're looking for.</StdDescription>

          <Link css={linkStyles} to={'/'}>
            <Button kind='primary'>Go Home</Button>
          </Link>
        </StdCopyWrapper>

        <StdBlankCanvasImage />
      </StdContentHolder>
    </Fragment>
  );
};
