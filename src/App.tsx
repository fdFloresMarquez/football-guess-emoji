import EmojisRow from './components/EmojisRow';
import GuessForm from './components/GuessForm';
import { getQuizzes } from './utils/getQuizzes';

const App: React.FC = () => {
  const quizz = getQuizzes();
  const firstQuizz = quizz[0];

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <section className="flex h-screen items-center justify-center">
        <div className="flex max-w-sm flex-col place-items-center rounded-xl bg-white p-6 shadow-lg">
          <div className="text-xl font-medium text-black">Adivina el jugador de Futbol ⚽</div>

          <EmojisRow quizz={firstQuizz} />

          <GuessForm quizz={firstQuizz} />
        </div>
      </section>
    </main>
  );
};

export default App;
