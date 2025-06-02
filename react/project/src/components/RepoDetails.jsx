import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader.jsx';
import { FiChevronLeft, FiGitCommit, FiAlertCircle, FiCode, FiBookOpen } from 'react-icons/fi';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.buttonBackground};
  font-size: 1rem;
  margin-bottom: 1rem;

  svg {
    margin-right: 0.25rem;
  }
`;

const Title = styled.h1`
  margin: 0.5rem 0;
  font-size: 2rem;
`;

const Stats = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  margin: 1rem 0;

  svg {
    margin-right: 0.25rem;
  }
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const InfoItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const RepoDetails = () => {
  const { owner, repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepo = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}`);
        if (response.status === 404) {
          throw new Error('Repository not found');
        }
        if (!response.ok) {
          throw new Error('Failed to fetch repository details');
        }
        const data = await response.json();
        setRepo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepo();
  }, [owner, repoName]);

  if (loading) return <Loader />;
  if (error) return (
    <Container>
      <p>{error}</p>
    </Container>
  );

  return (
    <Container>
      <BackLink to="/">
        <FiChevronLeft /> Back to search
      </BackLink>
      <Title>{repo.full_name}</Title>
      {repo.description && <Description>{repo.description}</Description>}
      <Stats>
        <span><FiGitCommit /> {repo.open_issues_count} Issues</span>
        <span><FiCode /> {repo.language || 'N/A'}</span>
      </Stats>
      <InfoList>
        <InfoItem>
          <FiBookOpen /> <a href={repo.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
        </InfoItem>
        <InfoItem>
          <FiAlertCircle /> License: {repo.license ? repo.license.name : 'None'}
        </InfoItem>
      </InfoList>
    </Container>
  );
};

export default RepoDetails;
