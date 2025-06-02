import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearch } from '../context/SearchContext.jsx';
import Loader from './Loader.jsx';
import RepoCard from './RepoCard.jsx';

const ListContainer = styled.div`
  max-width: 900px;
  margin: 1rem auto;
  padding: 0 1rem;
`;

const Message = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.125rem;
`;

const RepoList = () => {
  const { username } = useSearch();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!username) {
      setRepos([]);
      setError('');
      return;
    }

    const fetchRepos = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (response.status === 404) {
          throw new Error('User not found');
        }
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        // Sort by star count descending
        data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(data);
      } catch (err) {
        setError(err.message);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (!username) {
    return <Message>Type a username and click Search to see repositories.</Message>;
  }

  if (loading) return <Loader />;

  if (error) return <Message>{error}</Message>;

  if (repos.length === 0) return <Message>No repositories found.</Message>;

  return (
    <ListContainer>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </ListContainer>
  );
};

export default RepoList;
