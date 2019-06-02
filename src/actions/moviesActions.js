import { dispatch } from '../index';
import request from '../util/ajaxRequestUtil';
import Config from '../Config';

export const DEFAULT_PAGE_SIZE = 6;

export const loadAllMovies = (page = 0, size = DEFAULT_PAGE_SIZE, movieLoadType, searchString = "", replaceExisting = false) => {
    dispatch({ type: 'LOADING_MOVIES', movieLoadType, isLoading: true });
    return request({
        url: `${Config.API.Movies[movieLoadType]}?page=${page}&size=${size}${searchString ? '&title=' + searchString : ''}`,
        method: 'GET'
    })
        .then((movies) => {
            setAllMovies(movies, movieLoadType, replaceExisting, searchString);
            return movies;
        });
};

export const setAllMovies = (movies, movieLoadType, replaceExisting, searchString) => {
    dispatch({
        type: 'SET_MOVIES',
        movies,
        movieLoadType,
        allMoviesLoaded: movies.length < DEFAULT_PAGE_SIZE,
        replaceExisting,
        searchString
    });
};