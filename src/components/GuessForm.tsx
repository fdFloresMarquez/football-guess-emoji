import { Field, Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';

import { Quizz } from '@/interfaces/quizz';

interface Values {
  guess: string;
}

type Props = {
  quizz: Quizz;
};

const GuessForm: React.FC<Props> = ({ quizz }) => {
  return (
    <Formik
      initialValues={{
        guess: '',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        const userGuess = values.guess.toUpperCase();

        userGuess.includes(quizz.answer) ? console.log('Correct') : console.log('Incorrecto');
        setSubmitting(false);
      }}
    >
      <Form className="flex w-full flex-col items-center">
        <Field
          className="focus:shadow-outline mt-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="guess"
          name="guess"
          placeholder="Tu Jugador"
        />

        <button
          className="mt-4 rounded-lg border border-solid border-cyan-500 bg-cyan-500 p-1 font-medium text-white hover:bg-cyan-600 active:border-red-300"
          type="submit"
        >
          Adivinar!
        </button>
      </Form>
    </Formik>
  );
};

export default GuessForm;
