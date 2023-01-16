import { Quiz } from '@/interfaces/interfaces';

export const getQuizzes = (): Quiz[] => {
  return [
    {
      answer: 'MESSI',
      emojis: ['🐐', '🔟'],
    },
    {
      answer: 'MBAPPE',
      emojis: ['🗼', '🐢'],
    },
    {
      answer: 'GRIEZMANN',
      emojis: ['🧉', '🤴'],
    },
    {
      answer: 'RONALDO',
      emojis: ['🐛', '💪🏻'],
    },
    {
      answer: 'DYBALA',
      emojis: ['💎', '👉'],
    },
    {
      answer: 'DI MARIA',
      emojis: ['😇', '🍜'],
    },
    {
      answer: 'SUAREZ',
      emojis: ['🧛🏻‍♂️', '🔫'],
    },
    {
      answer: 'ZLATAN',
      emojis: ['🥋', '👃🏻'],
    },
    {
      answer: 'BENZEMA',
      emojis: ['😺', '🗼'],
    },
    {
      answer: 'NEYMAR',
      emojis: ['🎭', '🥳'],
    },
  ];
};
