import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';

import { MyButton } from './MyButton';

import { Quiz } from '@/interfaces/quizz';

interface Values {
  guess: string;
}

type Props = {
  quizz: Quiz;
  answerQuizz: () => void;
  isGameFinished: boolean;
  nextQuizz: () => void;
};

const GuessForm: React.FC<Props> = ({ quizz, answerQuizz, nextQuizz, isGameFinished }) => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  if (isGameFinished) console.log('Juego terminado!');

  const handleClick = (): void => {
    if (isGameFinished) return;
    setIsFormSubmitted(false);
    setIsCorrect(false);
    nextQuizz();
  };

  return (
    <>
      <Formik
        initialValues={{
          guess: '',
        }}
        onSubmit={(values: Values, { resetForm, setSubmitting }: FormikHelpers<Values>) => {
          if (isFormSubmitted) return;
          setIsFormSubmitted(true);

          const userGuess = values.guess.toUpperCase();

          answerQuizz();

          if (userGuess.includes(quizz.answer)) setIsCorrect(true);
          setSubmitting(false);
          resetForm();
        }}
      >
        <Form className="flex w-full flex-col items-center">
          <Field
            className="mt-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            id="guess"
            name="guess"
            placeholder="Tu Jugador"
          />

          {!isFormSubmitted && <MyButton type="submit">Adivinar!</MyButton>}
        </Form>
      </Formik>

      {isFormSubmitted && (
        <>
          {isCorrect ? (
            <span className="mt-3 -mb-2 font-bold text-green-500">Correcto!</span>
          ) : (
            <span className="mt-3 -mb-2 font-bold text-red-500">Incorrecto!</span>
          )}
        </>
      )}
      {!isGameFinished && isFormSubmitted && (
        <MyButton onClick={() => handleClick()}>Siguiente</MyButton>
      )}
    </>
  );
};

export default GuessForm;
