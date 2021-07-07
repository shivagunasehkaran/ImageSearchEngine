// Base URL & API key for further API calls
const BASE_URL = 'https://api.giphy.com/v1/';
const API_KEY = 'dc6zaTOxFJmzC';

// API URL
export const GET_URL = {
  RANDOM_URL: `${BASE_URL}stickers/random?api_key=${API_KEY}`,
  SEARCH_URL: `${BASE_URL}gifs/search?api_key=${API_KEY}`,
};
