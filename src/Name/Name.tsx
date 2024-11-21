import { FC, memo } from 'react';
import { Letter } from '../Letter/Letter';

export const Name: FC<{ name: string }> = memo(({ name }) => {
  return (
    <>
      {name.split('').map((letter, index) => (
        <Letter letter={letter} key={index} />
      ))}
    </>
  );
});
