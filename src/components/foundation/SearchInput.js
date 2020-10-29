import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../icon';

const StdSearchInput = styled.div`
  position: relative;
  width: 240px;
  height: 32px;
`;

const StdInput = styled.input`
  width: inherit;
  height: inherit;
  border: none;
  background-color: #ffffff;
  padding: 0 0 0 24px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray4};

  &:focus {
    outline: none;
  }
`;

const StdSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StdSearchInput>
      <StdSearchIcon />
      <StdInput type='text' placeholder='Search...' value={searchTerm} onChange={handleInputChange} />
    </StdSearchInput>
  );
};

export default SearchInput;
