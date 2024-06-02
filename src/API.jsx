import axios from "axios";

const BaseURL = import.meta.env.VITE_BASEURL;
const APIkey = import.meta.env.VITE_APIKEY;

export const getPopularList = async () => {
  const movie = await axios.get(`${BaseURL}/movie/popular?api_key=${APIkey}`);
  return movie.data.results;
};

export const getNowplayList = async () => {
  const movie = await axios.get(
    `${BaseURL}/movie/now_playing?api_key=${APIkey}`
  );
  return movie.data.results;
};

export const searchMovie = async (query) => {
  const movie = await axios.get(
    `${BaseURL}/search/movie?query=${query}&api_key=${APIkey}`
  );
  return movie.data.results;
};

export const getTopRated = async () => {
  const movie = await axios.get(`${BaseURL}/movie/top_rated?api_key=${APIkey}`);
  return movie.data.results;
};

export const getUpcoming = async () => {
  const movie = await axios.get(`${BaseURL}/movie/upcoming?api_key=${APIkey}`);
  return movie.data.results;
};

export const getGenreList = async () => {
  const movie = await axios.get(
    `${BaseURL}/genre/movie/list?api_key=${APIkey}`
  );
  return movie.data.genres;
};
