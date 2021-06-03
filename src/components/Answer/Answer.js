import React from 'react';
import styled from 'styled-components';

const StyledAnswer = styled.div`
  position: absolute;
  top: ${({ top }) => top + 'px'};
  left: ${({ left }) => left + 'px'};
  font-weight: bold;
  cursor: pointer;

  &:before {
    content: attr(data-before);
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: normal;
  }

  &.picked {
    color: grey;
  }

  &.correct {
    color: green;
  }

  &.bad {
    color: red;
  }
`;

export const Answer = (props) => {
  return <StyledAnswer {...props}></StyledAnswer>;
};
