import axios from 'axios';

const API_KEY = '7d0abec39758faccda3f43ba1805339d';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchMovieDay = async page => {
  try {
    const response = await axios.get('trending/movie/day', {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDBhYmVjMzk3NThmYWNjZGEzZjQzYmExODA1MzM5ZCIsInN1YiI6IjY0ZjFiM2NiNzdkMjNiMDE1MDM5NmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WplJPNk-aJnVXOPn70UQZXY7FFOVyJ_3vwxBYgU4rJs',
      },
      params: {
        key: API_KEY,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieId = async id => {
  try {
    const response = await axios.get(`/movie/${id}`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDBhYmVjMzk3NThmYWNjZGEzZjQzYmExODA1MzM5ZCIsInN1YiI6IjY0ZjFiM2NiNzdkMjNiMDE1MDM5NmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WplJPNk-aJnVXOPn70UQZXY7FFOVyJ_3vwxBYgU4rJs',
      },
      params: {
        key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieIdCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDBhYmVjMzk3NThmYWNjZGEzZjQzYmExODA1MzM5ZCIsInN1YiI6IjY0ZjFiM2NiNzdkMjNiMDE1MDM5NmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WplJPNk-aJnVXOPn70UQZXY7FFOVyJ_3vwxBYgU4rJs',
      },
      params: {
        key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieIdRevies = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDBhYmVjMzk3NThmYWNjZGEzZjQzYmExODA1MzM5ZCIsInN1YiI6IjY0ZjFiM2NiNzdkMjNiMDE1MDM5NmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WplJPNk-aJnVXOPn70UQZXY7FFOVyJ_3vwxBYgU4rJs',
      },
      params: {
        key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieSearch = async (guery, page) => {
  try {
    const response = await axios.get(`/search/movie`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDBhYmVjMzk3NThmYWNjZGEzZjQzYmExODA1MzM5ZCIsInN1YiI6IjY0ZjFiM2NiNzdkMjNiMDE1MDM5NmMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WplJPNk-aJnVXOPn70UQZXY7FFOVyJ_3vwxBYgU4rJs',
      },
      params: {
        key: API_KEY,
        query: guery,
        include_adult: 'false',
        language: 'en-US',
        page: page,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
