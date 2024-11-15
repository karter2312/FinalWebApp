// src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8080/api'; // Ensure this matches your backend URL

// Function to fetch players data
export const getPlayers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/players`);
    return response.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    return []; // Return an empty array on error
  }
};
