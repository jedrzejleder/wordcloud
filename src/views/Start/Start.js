import { Button } from 'components/Button/Button';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeScreen } from './Start.styles';

export const Start = () => {
  const [userName, setUserName] = useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <HomeScreen>
      <h1>Wordcloud game</h1>
      <input
        placeholder="Enter your name here..."
        value={userName}
        onChange={handleInputChange}
      />
      <Button
        as={Link}
        to={{
          pathname: '/game',
          state: userName,
        }}
      >
        Play
      </Button>
    </HomeScreen>
  );
};
