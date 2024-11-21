/** @jsxImportSource @emotion/react */
import { FC, memo, useEffect, useState } from 'react';
import { BeerData } from '../Table/Table';
import styles from './Row.module.css';
import { getAnimatedStyle } from '../utils';
import { Name } from '../Name/Name';

export const Row: FC<{ row: BeerData }> = memo(({ row: rowProp }) => {
  const [row, setRow] = useState<BeerData | null>(null);

  useEffect(() => {
    const timerId = setTimeout(
      () => {
        setRow(rowProp);
      },
      Number(rowProp.tap) > 10
        ? Number(rowProp.tap) === 20
          ? 10000
          : Number(`${rowProp.tap.charAt(1)}000`)
        : Number(`${rowProp.tap}000`)
    );

    return () => {
      clearTimeout(timerId);
    };
  }, [rowProp]);

  return (
    row && (
      <ul className={styles.menuRow} key={row.tap}>
        <li
          className={`${styles.cell} ${styles.tap}`}
          css={[getAnimatedStyle(Number(row.tap), 20)]}
        >
          {row.tap}
        </li>
        <li className={`${styles.cell} ${styles.name} `}>
          {<Name name={row.name.padEnd(21, ' ')} />}{' '}
        </li>
        <li
          className={`${styles.cell} ${styles.info}`}
          css={[getAnimatedStyle(row.ibu.length, 40)]}
        >
          <span className={styles.info_box}>
            alc: {Number(row.alc).toFixed(2)}
          </span>
          <span className={styles.info_box}>
            ibu: {Number(row.ibu).toFixed(2)}
          </span>
        </li>

        <li
          className={`${styles.cell} ${styles.type}`}
          css={[getAnimatedStyle(1, 20)]}
        >
          {row.type}
        </li>
        <li className={`${styles.cell} ${styles.producer}`}>
          <Name name={row.producer.padEnd(12, ' ')} />
        </li>
        <li
          className={`${styles.cell} ${styles.volume}`}
          css={[getAnimatedStyle(1, 20)]}
        >
          {row.volume}
        </li>
        <li className={`${styles.cell} ${styles.price}`}>
          <Name name={row.price} />
        </li>
      </ul>
    )
  );
});
