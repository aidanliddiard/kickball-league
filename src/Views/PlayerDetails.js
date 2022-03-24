import React, { useEffect } from 'react';
import { fetchPlayerDetails } from '../services/players';

export default function PlayerDetails() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerDetails('1');
      console.log(data);
    };
    fetchData();
  }, []);
  return <div>PlayerDetails</div>;
}
