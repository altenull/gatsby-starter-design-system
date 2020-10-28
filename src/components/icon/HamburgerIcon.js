import React from 'react';
import styled from 'styled-components';

const StdHamburgerIcon = styled.span`
  display: block;
  width: 24px;
  height: 16px;
  position: relative;
`;

const StdLine = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 1px;
  background-color: ${(props) => props.theme.colors.gray3};
  transition: top ${(props) => props.theme.duration.slow} ease-in-out,
    left ${(props) => props.theme.duration.normal} ease-in-out,
    right ${(props) => props.theme.duration.normal} ease-in-out,
    transform ${(props) => props.theme.duration.slow} ease-in-out;
`;

const StdTopLine = styled(StdLine)`
  top: ${(props) => (props.shouldTransformToCloseIcon ? '50%' : '0')};
  left: ${(props) => (props.shouldTransformToCloseIcon ? '50%' : '0')};
  right: ${(props) => (props.shouldTransformToCloseIcon ? '50%' : '0')};
`;

const StdMiddleLine = styled(StdLine)`
  top: 50%;
  transform: rotate(${(props) => (props.shouldTransformToCloseIcon ? 45 * props.direction + 'deg' : '0')});
`;

const StdBottomLine = styled(StdLine)`
  top: ${(props) => (props.shouldTransformToCloseIcon ? '50%' : '100%')};
  left: ${(props) => (props.shouldTransformToCloseIcon ? '50%' : '0')};
  right: ${(props) => (props.shouldTransformToCloseIcon ? '50%' : '0')};
`;

const HamburgerIcon = ({ shouldTransformToCloseIcon, ...props }) => {
  return (
    <StdHamburgerIcon {...props}>
      <StdTopLine shouldTransformToCloseIcon={shouldTransformToCloseIcon} />
      <StdMiddleLine shouldTransformToCloseIcon={shouldTransformToCloseIcon} direction={1} />
      <StdMiddleLine shouldTransformToCloseIcon={shouldTransformToCloseIcon} direction={-1} />
      <StdBottomLine shouldTransformToCloseIcon={shouldTransformToCloseIcon} />
    </StdHamburgerIcon>
  );
};

export default HamburgerIcon;
