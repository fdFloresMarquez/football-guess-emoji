import { useState } from 'react';

import { Quiz, UseGame } from '@/interfaces/interfaces';
import { getQuizzes } from '@/utils/getQuizzes';

export const useGame = (): UseGame => {
  const quizzes = getQuizzes();

  const [actualQuiz, setQuiz] = useState<Quiz>(quizzes[0]);
  const [isGameFinished, setGameStatus] = useState<boolean>(false);
  const [answersNumber, setAnswersNumber] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);

  const countWrongAnswer = (): void => {
    setWrongAnswers((prev) => prev + 1);
  };

  const countCorrectAnswer = (): void => {
    setCorrectAnswers((prev) => prev + 1);
  };

  const answerQuizz = (): void => {
    if (answersNumber === quizzes.length - 1) setGameStatus(true);
    setAnswersNumber((a) => a + 1);

    if (isGameFinished) return;
  };

  const nextQuizz = (): void => {
    if (answersNumber > quizzes.length - 1) return;
    setQuiz(quizzes[answersNumber]);
  };

  return {
    // Variables
    actualQuiz,
    isGameFinished,
    correctAnswers,
    wrongAnswers,

    //Functions
    countWrongAnswer,
    countCorrectAnswer,
    answerQuizz,
    nextQuizz,
  };
};
