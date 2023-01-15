import { Quiz } from '@/interfaces/interfaces';

type Props = {
  quizz: Quiz;
};

const EmojisRow: React.FC<Props> = ({ quizz }) => {
  return (
    <div className="mt-4 flex flex-row space-x-2">
      {quizz.emojis.map((emoji) => (
        <div key={emoji} className="rounded-lg bg-gray-200 p-2">
          <span className="text-2xl">{emoji}</span>
        </div>
      ))}
    </div>
  );
};

export default EmojisRow;
