import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  return (
    <SearchContext.Provider value={{ username, setUsername }}>
      {children}
    </SearchContext.Provider>
  );
};
