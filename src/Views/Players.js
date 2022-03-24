import React from 'react';
import { useEffect } from 'react';
import { fetchPlayers } from '../services/players';

export default function Players() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      console.log(data);
    };
    fetchData();
  }, []);
  return <div>Players</div>;
}
