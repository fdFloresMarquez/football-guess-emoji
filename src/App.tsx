import EmojisRow from './components/EmojisRow';
import GuessForm from './components/GuessForm';
import { useGame } from './hooks';

const App: React.FC = () => {
  const {
    actualQuiz,
    isGameFinished,
    correctAnswers,
    wrongAnswers,

    countWrongAnswer,
    countCorrectAnswer,
    answerQuizz,
    nextQuizz,
  } = useGame();

  const headerText = isGameFinished ? 'Juego terminado!' : 'Adivina el jugador de Futbol ⚽';

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <section className="flex h-screen flex-col items-center justify-center gap-5">
        <div className="flex max-w-sm flex-col place-items-center rounded-xl bg-white p-6 shadow-lg">
          <h1 className="text-xl font-medium text-black">{headerText}</h1>

          {!isGameFinished ? (
            <>
              <EmojisRow quizz={actualQuiz} />
              <GuessForm
                answerQuizz={answerQuizz}
                countCorrectAnswer={countCorrectAnswer}
                countWrongAnswer={countWrongAnswer}
                isGameFinished={isGameFinished}
                nextQuizz={nextQuizz}
                quizz={actualQuiz}
              />
            </>
          ) : (
            <>
              <span className="mt-3 -mb-2 font-bold text-green-500">
                Acertados: {correctAnswers}
              </span>
              <span className="mt-3 -mb-2 font-bold text-red-500">Errados: {wrongAnswers}</span>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
