import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#f5f5f5',
  text: '#121212',
  cardBackground: '#ffffff',
  buttonBackground: '#007bff',
  buttonText: '#ffffff',
};

const darkTheme = {
  background: '#121212',
  text: '#f5f5f5',
  cardBackground: '#1e1e1e',
  buttonBackground: '#1f6feb',
  buttonText: '#ffffff',
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const toggleTheme = () => setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
