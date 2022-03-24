import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTeamDetails } from '../services/teams';

export default function TeamDetails() {
  const params = useParams();

  const [team, setTeam] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamDetails(params.id);
      console.log(data);
      setTeam(data);
    };
    fetchData();
  }, [params.id]);

  console.log(team.players);
  return (
    <div key={team.id}>
      <h3>{team.name}</h3>
      <h6>
        {team.city}, {team.state}
      </h6>
      <ul>
        {team.players.map((players) => (
          <li key={players.id}>{players.name}</li>
        ))}
      </ul>
    </div>
  );
}
