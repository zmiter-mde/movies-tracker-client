import { dispatch } from '../index';
import request from '../util/ajaxRequestUtil';
import Config from '../Config';

export const DEFAULT_PAGE_SIZE = 6;

export const loadMovies = (page = 0, size = DEFAULT_PAGE_SIZE) => {
    dispatch({ type: 'LOADING_MOVIES', isLoading: true });
    return request({
        url: `${Config.API.Movies}?page=${page}&size=${size}`,
        method: 'GET'
    })
        .then((movies) => {
            setMovies(movies);
            return movies;
        });
};

export const setMovies = movies => {
    dispatch({ type: 'SET_MOVIES', movies, allMoviesLoaded: movies.length < DEFAULT_PAGE_SIZE });
};