import styled from 'styled-components';

export const HomeScreen = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 0;
    font-size: 50px;
  }

  input {
    width: 400px;
    padding: 15px;
    border-radius: 3px;
    border: 1px solid lightgray;
    margin-bottom: 30px;
  }
`;
