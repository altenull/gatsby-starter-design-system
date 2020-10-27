import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const primaryButtonStyles = css`
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const secondaryButtonStyles = css`
  background-color: ${(props) => props.theme.colors.gray2};
  border: 2px solid ${(props) => props.theme.colors.gray2};

  &:hover {
    color: ${(props) => props.theme.colors.gray2};
  }
`;

const kindToButtonStylesMap = {
  primary: primaryButtonStyles,
  secondary: secondaryButtonStyles,
};

const StdButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  outline: none;
  border-radius: 32px;
  padding: 12px 24px;
  font-size: 17px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  letter-spacing: 0.9px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  transition: all 0.15s ease-in-out;

  ${(props) => kindToButtonStylesMap[props.kind]};

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

const Button = ({ children, kind }) => {
  return <StdButton kind={kind}>{children}</StdButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  kind: 'primary',
};

export default Button;
