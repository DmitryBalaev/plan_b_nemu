import { useEffect, useState } from 'react';
import './App.css';
import { BeerData, Table } from './Table/Table';
const API_URL = 'https://sheetdb.io/api/v1/sx68x6nkkj24j';

const fetchTapsData = async () => {
  const response = await fetch(API_URL);
  const data = response.json();
  return data;
};

const App = () => {
  const [rows, setRows] = useState<BeerData[]>([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTapsData()
      .then((data) => {
        setRows(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return !loading && <Table rows={rows} />;
};

export default App;
