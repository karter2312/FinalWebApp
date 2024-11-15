// src/components/Players.js

import React, { useEffect, useState } from 'react';
import { getPlayers } from '../services/api'; // Import the function from api.js

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await getPlayers(); // Call the API function
      setPlayers(data);
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li> // Adjust this field to match your data structure
        ))}
      </ul>
    </div>
  );
}

export default Players;
