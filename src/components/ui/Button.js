import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: white;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Button = ({ children }) => {
  return <StdButton>{children}</StdButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
