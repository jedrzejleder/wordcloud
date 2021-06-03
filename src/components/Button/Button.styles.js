import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 3px;
  color: blue;
  border: 1px solid blue;
  background: none;
  transition: color 0.3s, background-color 0.3s, transform 0.3s;
  text-decoration: none;

  &:hover {
    color: white;
    background-color: blue;
    transform: scale(1.1);
  }
`;
