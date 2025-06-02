import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import RepoList from './components/RepoList.jsx';
import RepoDetails from './components/RepoDetails.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <RepoList />
            </>
          }
        />
        <Route path="/repos/:owner/:repoName" element={<RepoDetails />} />
      </Routes>
    </>
  );
};

export default App;
