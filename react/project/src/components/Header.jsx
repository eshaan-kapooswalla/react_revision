import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  font-size: 1.25rem;

  &:hover {
    opacity: 0.9;
  }
`;

const Header = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Link to="/">
        <Title>GitHub Repo Explorer</Title>
      </Link>
      <ThemeToggle onClick={toggleTheme}>
        {themeMode === 'light' ? <FiMoon /> : <FiSun />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
