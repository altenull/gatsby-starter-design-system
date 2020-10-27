import React from 'react';
import styled from 'styled-components';

const StdSvg = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
  box-sizing: initial;
  fill: ${(props) => props.theme.colors.white};
`;

const CopyIcon = ({ ...props }) => {
  return (
    <StdSvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488.3 488.3' {...props}>
      <path d='M314.3 85.4h-227c-21.3 0-38.6 17.3-38.6 38.6v325.7c0 21.3 17.3 38.6 38.6 38.6h227c21.3 0 38.6-17.3 38.6-38.6V124C352.8 102.7 335.5 85.4 314.3 85.4zM325.8 449.6c0 6.4-5.2 11.6-11.6 11.6h-227c-6.4 0-11.6-5.2-11.6-11.6V124c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6V449.6z' />
      <path d='M401.1 0h-227c-21.3 0-38.6 17.3-38.6 38.6 0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5c0-6.4 5.2-11.6 11.6-11.6h227c6.4 0 11.6 5.2 11.6 11.6v325.7c0 6.4-5.2 11.6-11.6 11.6 -7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5c21.3 0 38.6-17.3 38.6-38.6V38.6C439.7 17.3 422.4 0 401.1 0z' />
    </StdSvg>
  );
};

export default CopyIcon;
