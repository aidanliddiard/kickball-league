import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPlayers } from '../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      console.log(data);
      setPlayers(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}
