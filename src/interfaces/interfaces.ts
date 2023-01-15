export interface Quiz {
  answer: string;
  emojis: string[];
}

export interface UseGame {
  actualQuiz: Quiz;
  isGameFinished: boolean;
  correctAnswers: number;
  wrongAnswers: number;
  countWrongAnswer: () => void;
  countCorrectAnswer: () => void;
  answerQuizz: () => void;
  nextQuizz: () => void;
}
