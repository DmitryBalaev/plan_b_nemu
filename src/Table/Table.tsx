import { FC, memo, useEffect, useState } from 'react';
import styles from './Table.module.css';
import { Row } from '../Row/Row';

export interface BeerData {
  tap: string;
  name: string;
  type: string;
  producer: string;
  alc: string;
  ibu: string;
  volume: string;
  price: string;
}

export const Table: FC<{ rows: BeerData[] }> = memo(({ rows }) => {
  const [visibleRows, setVisibleRows] = useState<BeerData[]>(rows.slice(0, 10));
  const [startIndex, setStartIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const nextIndex = (startIndex + 10) % rows.length;
  //     setVisibleRows(rows.slice(nextIndex, nextIndex + 10));
  //     setStartIndex(nextIndex);
  //   }, 20000);
  //   return () => clearInterval(interval);
  // }, [rows, startIndex]);

  return (
    <div className={styles.menuBody}>
      {visibleRows.map((row, index) => {
        return <Row key={index} row={row} />;
      })}
    </div>
  );
});
