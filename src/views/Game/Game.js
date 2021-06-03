import React from 'react';
import data from 'assets/data/data';
import { Button } from 'components/Button/Button';
import { GameScreen, Board } from './Game.styles';
import { Answer } from 'components/Answer/Answer';
import { getRandomNumber, getUniqueInts } from 'helpers/functions';
import { Link } from 'react-router-dom';

const windowWidth = window.innerWidth * 0.6 - 40;
const windowHeight = window.innerHeight * 0.6 - 40;

const selected = data[getRandomNumber(0, 2)];
const allWords = selected.all_words;
const goodWords = selected.good_words;

const uniqueTop = getUniqueInts(allWords.length, windowHeight / 20);
const uniqueLeft = getUniqueInts(allWords.length, windowWidth / 10);

let correctAnswers = 0;
let badAnswers = 0;
const allCorrectAnswers = goodWords.length;

const clicked = (e) => {
  e.target.classList.toggle('picked');
};

export const Game = (props) => {
  const userScore = {
    userName: props.location.state,
  };

  const checkAnswers = () => {
    const selected = document.querySelectorAll('.picked');
    const checkBtn = document.getElementById('check');
    const finishBtn = document.getElementById('finish');

    selected.forEach((el) => {
      if (el.dataset.value === 'good') {
        el.classList.add('correct');
        el.setAttribute('data-before', 'good');
        correctAnswers++;
      } else {
        el.classList.add('bad');
        el.setAttribute('data-before', 'bad');
        badAnswers++;
      }
    });
    const points =
      correctAnswers * 2 - (badAnswers + (allCorrectAnswers - correctAnswers));
    userScore.score = points;
    checkBtn.style.display = 'none';
    finishBtn.style.display = 'inline-block';
  };

  return (
    <GameScreen id="board">
      <h1>{selected.question}</h1>
      <Board>
        {allWords.map((el) => {
          if (goodWords.find((gw) => gw === el)) {
            return (
              <Answer
                key={el}
                top={uniqueTop.pop() * 20}
                left={uniqueLeft.pop() * 10}
                onClick={clicked}
                data-value="good"
              >
                {el}
              </Answer>
            );
          } else {
            return (
              <Answer
                key={el}
                top={uniqueTop.pop() * 20}
                left={uniqueLeft.pop() * 10}
                onClick={clicked}
              >
                {el}
              </Answer>
            );
          }
        })}
      </Board>
      <Button id="check" onClick={checkAnswers}>
        Check answers!
      </Button>
      <Button
        as={Link}
        to={{
          pathname: '/score',
          state: userScore,
        }}
        id="finish"
        style={{ display: 'none' }}
      >
        Finish game!
      </Button>
    </GameScreen>
  );
};
