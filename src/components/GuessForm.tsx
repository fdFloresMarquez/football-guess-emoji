import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';

import { Quiz } from '@/interfaces/quizz';

interface Values {
  guess: string;
}

type Props = {
  quizz: Quiz;
  nextQuiz: () => void;
  isGameFinished: boolean;
};

const GuessForm: React.FC<Props> = ({ quizz, nextQuiz, isGameFinished }) => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  if (isGameFinished) console.log('Juego terminado!');

  return (
    <Formik
      initialValues={{
        guess: '',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setIsFormSubmitted(true);
        const userGuess = values.guess.toUpperCase();

        nextQuiz();

        if (userGuess.includes(quizz.answer)) setIsCorrect(true);
        setSubmitting(false);
      }}
    >
      <Form className="flex w-full flex-col items-center">
        <Field
          className="mt-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          id="guess"
          name="guess"
          placeholder="Tu Jugador"
        />

        {isFormSubmitted && (
          <>
            {isCorrect ? (
              <span className="mt-3 -mb-2 font-bold text-green-500">Correcto!</span>
            ) : (
              <span className="mt-3 -mb-2 font-bold text-red-500">Incorrecto!</span>
            )}
          </>
        )}

        <button
          className="mt-4 rounded-lg border border-solid border-cyan-500 bg-cyan-500 p-1 font-medium text-white hover:bg-cyan-600 active:border-blue-300"
          type="submit"
        >
          Adivinar!
        </button>
      </Form>
    </Formik>
  );
};

export default GuessForm;
