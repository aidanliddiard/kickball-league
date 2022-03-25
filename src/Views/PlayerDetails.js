import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlayerDetails } from '../services/players';

export default function PlayerDetails() {
  const params = useParams();

  const [player, setPlayer] = useState({ teams: {} });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerDetails(params.id);
      setPlayer(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <div key={player.id}>
      <h3>{player.name}</h3>
      <h6>{player.position}</h6>
      <Link to={`/teams/${player.team_id}`}>
        <p>{player.teams.name}</p>
      </Link>
    </div>
  );
}
