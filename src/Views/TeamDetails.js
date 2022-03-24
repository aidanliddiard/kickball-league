import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTeamDetails } from '../services/teams';

export default function TeamDetails() {
  const params = useParams();

  const [team, setTeam] = useState({ players: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamDetails(params.id);
      console.log(data);
      setTeam(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <div key={team.id}>
      <h3>{team.name}</h3>
      <h6>
        {team.city}, {team.state}
      </h6>
      <ul>
        {team.players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}
