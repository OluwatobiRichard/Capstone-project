const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2UwZjRhYjM1Yzg0NWIwZjUwZjlmYjQyYjMyOGVkYSIsIm5iZiI6MTczNjAwMTc1OC43NTEwMDAyLCJzdWIiOiI2Nzc5NDhkZTgzMGE4ZjRjYzc2NjhiMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pNebX2S5ZElk2cDVo7n6Q1DKxjiwpFFntPIzqH4J59g';
const API_KEY = 'f7e0f4ab35c845b0f50f9fb42b328eda';

const fetchFromTMDB = async (endpoint) => {
  try {
    // Add API key to the endpoint
    const separator = endpoint.includes('?') ? '&' : '?';
    const url = `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from TMDB:', error);
    throw error;
  }
};

// Export the API functions
export const getTrendingMovies = () => fetchFromTMDB('/trending/movie/day');
export const getUpcomingMovies = () => fetchFromTMDB('/movie/upcoming');
export const getLatestMovies = () => fetchFromTMDB('/movie/now_playing');
export const getMovieDetails = (movieId) =>
  fetchFromTMDB(`/movie/${movieId}?append_to_response=credits,similar`);
export const searchMovies = (query) =>
  fetchFromTMDB(`/search/movie?query=${encodeURIComponent(query)}`);

export const getMovieVideos = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) throw new Error('Failed to fetch videos');
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    throw error;
  }
};

export const getWatchProviders = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error('Failed to fetch watch providers');
    return await response.json();
  } catch (error) {
    console.error('Error fetching watch providers:', error);
    throw error;
  }
};
