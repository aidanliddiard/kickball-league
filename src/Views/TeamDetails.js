import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTeamDetails } from '../services/teams';

export default function TeamDetails() {
  const params = useParams();
  console.log(params);

  //const [team, setTeam] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamDetails(params.id);
      console.log(data);
    };
    fetchData();
  }, [params.id]);

  return <div>TeamDetails</div>;
}
