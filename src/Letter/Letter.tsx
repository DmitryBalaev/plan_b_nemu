/** @jsxImportSource @emotion/react */
import { memo, useMemo, type FC } from 'react';
import { getAnimatedStyle } from '../utils';

const getNum = (letter: string) => {
  let num = 0;
  const russianAlphabet = '1234567890№абвгдеёжзийклмнопрстуфхцчшщъыьэюя.`-_';
  const englishAlphabet = '1234567890№abcdefghijklmnopqrstuvwxyz.`-_';

  if (russianAlphabet.includes(letter.toLowerCase())) {
    num = russianAlphabet.indexOf(letter.toLowerCase()) + 1;
  }

  if (englishAlphabet.includes(letter.toLowerCase())) {
    num = englishAlphabet.indexOf(letter.toLowerCase()) + 1;
  }

  return num;
};

export const Letter: FC<{ letter: string }> = memo(({ letter }) => {
  const num = useMemo(() => {
    return getNum(letter);
  }, [letter]);
  return <div css={[getAnimatedStyle(num)]}>{letter.toUpperCase()}</div>;
});
