import { useState } from 'react';

import EmojisRow from './components/EmojisRow';
import GuessForm from './components/GuessForm';
import { Quiz } from './interfaces/quizz';
import { getQuizzes } from './utils/getQuizzes';

const App: React.FC = () => {
  const quizzes = getQuizzes();

  const [actualQuiz, setQuiz] = useState<Quiz>(quizzes[0]);
  const [isGameFinished, setGameStatus] = useState<boolean>(false);
  const [answersNumber, setAnswersNumber] = useState<number>(0);

  const nextQuiz = (): void => {
    setAnswersNumber((a) => a + 1);

    if (answersNumber < quizzes.length) setGameStatus(true);

    if (isGameFinished) return;

    setQuiz(quizzes[answersNumber]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <section className="flex h-screen items-center justify-center">
        <div className="flex max-w-sm flex-col place-items-center rounded-xl bg-white p-6 shadow-lg">
          <div className="text-xl font-medium text-black">Adivina el jugador de Futbol ⚽</div>

          <EmojisRow quizz={actualQuiz} />

          <GuessForm isGameFinished={isGameFinished} nextQuiz={nextQuiz} quizz={actualQuiz} />
        </div>
      </section>
    </main>
  );
};

export default App;
