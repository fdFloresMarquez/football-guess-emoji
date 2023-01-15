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
      answer: 'DI MARIA',
      emojis: ['😇', '🍜'],
    },
    {
      answer: 'GRIEZZMANN',
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
      answer: 'SUAREZ',
      emojis: ['🧛🏻‍♂️', '👉'],
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
