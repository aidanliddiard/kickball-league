import React, { useEffect } from 'react';
import { fetchTeams } from '../services/teams';

export default function Teams() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div>Teams</div>;
}
