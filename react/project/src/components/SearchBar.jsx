import React, { useState } from 'react';
import styled from 'styled-components';
import { useSearch } from '../context/SearchContext.jsx';
import { FiSearch } from 'react-icons/fi';

const SearchContainer = styled.div`
  margin: 2rem auto 1rem;
  max-width: 600px;
  display: flex;
  width: 90%;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.text};
  border-right: none;
  border-radius: 0.375rem 0 0 0.375rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.cardBackground};

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 0 1rem;
  border-radius: 0 0.375rem 0.375rem 0;
  display: flex;
  align-items: center;
  font-size: 1.25rem;

  &:hover {
    opacity: 0.9;
  }
`;

const SearchBar = () => {
  const { setUsername } = useSearch();
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setUsername(input.trim());
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Enter GitHub username..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">
          <FiSearch />
        </Button>
      </SearchContainer>
    </form>
  );
};

export default SearchBar;
