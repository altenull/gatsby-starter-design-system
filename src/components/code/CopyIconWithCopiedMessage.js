import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CopyIcon } from '../icon';

const StdRelativeWrapper = styled.div`
  position: relative;
`;

const StdCopyIconWrapper = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  transition: all ${(props) => props.theme.duration.slow};
  transform: ${(props) => (props.hasCopied ? 'translateX(8px)' : 'translateX(0)')};
  opacity: ${(props) => (props.hasCopied ? '0' : '1')};
  background-color: ${(props) => (props.isHovered ? 'rgba(255, 255, 255, 0.25)' : 'initial')};
`;

const StdCopyIcon = styled(CopyIcon)`
  padding: 8px;
`;

const StdCopySuccessMessage = styled.span`
  position: absolute;
  top: 8px;
  right: -8px;
  white-space: nowrap;
  color: #ffffff;
  transition: all ${(props) => props.theme.duration.slow};
  transform: ${(props) => (props.hasCopied ? 'translateX(-8px)' : 'translateX(0)')};
  opacity: ${(props) => (props.hasCopied ? '1' : '0')};
`;

const CopyIconWithCopiedMessage = React.forwardRef(({ isHovered, hasCopied, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <StdRelativeWrapper>
        <StdCopyIconWrapper isHovered={isHovered} hasCopied={hasCopied}>
          <StdCopyIcon size={24} />
        </StdCopyIconWrapper>

        <StdCopySuccessMessage hasCopied={hasCopied}>Copied</StdCopySuccessMessage>
      </StdRelativeWrapper>
    </div>
  );
});

CopyIconWithCopiedMessage.propTypes = {
  isHovered: PropTypes.bool,
  hasCopied: PropTypes.bool,
};

CopyIconWithCopiedMessage.defaultProps = {
  isHovered: false,
  hasCopied: false,
};

export default CopyIconWithCopiedMessage;
