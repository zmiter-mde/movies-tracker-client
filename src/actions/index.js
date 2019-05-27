import { dispatch } from '../index';
import Config from '../Config';

export const DEFAULT_PAGE_SIZE = 6;

export const loadMovies = (page = 0, size = DEFAULT_PAGE_SIZE) => {
    return fetch(`${Config.API.Movies}?page=${page}&size=${size}`)
        .then((response) => response.json())
        .then((movies) => {
            setMovies(movies);
            return movies;
        });
};

export const setMovies = movies => {
    dispatch({ type: 'SET_MOVIES', movies, allMoviesLoaded: movies.length < DEFAULT_PAGE_SIZE });
};