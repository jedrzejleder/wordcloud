import styled from 'styled-components';

export const GameScreen = styled.div`
  height: 100vh;
  text-align: center;

  .hidden {
    display: none;
  }
`;

export const Board = styled.div`
  position: relative;
  margin: 30px auto;
  width: 65%;
  height: 60%;
  border: 1px solid black;
`;
