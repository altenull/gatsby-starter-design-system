import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CopyIconWithCopiedMessage } from '../../components/code';
import useIsHovered from '../../hooks/useIsHovered';
import { clipboardCopy } from '../../utils/clipboard';

const StdCodeHighlighter = styled.div`
  position: relative;
`;

const StdCopyIconWithCopiedMessage = styled(CopyIconWithCopiedMessage)`
  display: none;
  position: absolute;
  top: 8px;
  right: 12px;
  cursor: pointer;

  ${(props) => props.theme.mediaQueries.viewPort9} {
    display: initial;
  }
`;

/**
 * @param {string} codeInHtml - This will be highlighten with prismjs depending on the theme
 *     that imported from gatsby-browser.js and gatsby-ssr.js.
 * @param {string} codeInRawMarkdownBody - A target of clipboard copy. If not passed as parameter,
 *     then the copy icon won't be rendered.
 */
const CodeHighlighterContainer = React.memo(({ codeInHtml, codeInRawMarkdownBody }) => {
  const [hasCodeCopied, setHasCodeCopied] = useState(false);
  const [copyIconWithCopiedMessageRef, isCopyIconWithCopiedMessageRefHovered] = useIsHovered();

  useEffect(() => {
    if (!isCopyIconWithCopiedMessageRefHovered && hasCodeCopied) {
      setHasCodeCopied(false);
    }
  }, [isCopyIconWithCopiedMessageRefHovered, hasCodeCopied, setHasCodeCopied]);

  const handleCopyIconClick = useCallback((codeInRawMarkdownBody) => {
    const markdownCodeBlockRegExp = /(`{3})[a-zA-Z]*\n|(`{3})/g;
    const isClipboardCopySuccesss = clipboardCopy(codeInRawMarkdownBody.replace(markdownCodeBlockRegExp, ''));

    if (isClipboardCopySuccesss) {
      setHasCodeCopied(true);
    }
  }, []);

  return (
    <StdCodeHighlighter>
      <div
        dangerouslySetInnerHTML={{
          __html: codeInHtml,
        }}
      />

      {!!codeInRawMarkdownBody && (
        <StdCopyIconWithCopiedMessage
          ref={copyIconWithCopiedMessageRef}
          isHovered={isCopyIconWithCopiedMessageRefHovered}
          hasCopied={hasCodeCopied}
          onClick={() => handleCopyIconClick(codeInRawMarkdownBody)}
        />
      )}
    </StdCodeHighlighter>
  );
});

CodeHighlighterContainer.propTypes = {
  codeInHtml: PropTypes.string.isRequired,
  codeInRawMarkdownBody: PropTypes.string,
};

export default CodeHighlighterContainer;
