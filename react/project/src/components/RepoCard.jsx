import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiGitBranch, FiArrowRight } from 'react-icons/fi';

const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

const RepoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RepoName = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;

  svg {
    margin-right: 0.25rem;
  }
`;

const Description = styled.p`
  margin: 0.5rem 0 1rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
`;

const DetailsButton = styled.button`
  align-self: flex-end;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.9;
  }

  svg {
    margin-left: 0.25rem;
  }
`;

const RepoCard = ({ repo }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/repos/${repo.owner.login}/${repo.name}`);
  };

  return (
    <Card>
      <RepoHeader>
        <RepoName>{repo.name}</RepoName>
        <Stats>
          <span>
            <FiStar /> {repo.stargazers_count}
          </span>
          <span>
            <FiGitBranch /> {repo.forks_count}
          </span>
        </Stats>
      </RepoHeader>
      {repo.description && <Description>{repo.description}</Description>}
      <DetailsButton onClick={goToDetails}>
        Details <FiArrowRight />
      </DetailsButton>
    </Card>
  );
};

export default RepoCard;
