import { Button } from 'components/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ScoreScreen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
  text-align: center;

  .score {
    color: blue;
  }
`;

export const Score = (props) => {
  const { userName, score } = props.location.state;
  return (
    <ScoreScreen>
      <h1>Congratulations, {userName}!</h1>
      <h2>Your score:</h2>
      <h2 className="score">{score} points</h2>
      <Button as={Link} to="/">
        Try once again!
      </Button>
    </ScoreScreen>
  );
};
