import { dispatch } from '../index';
import request from '../util/ajaxRequestUtil';
import {convertArrayToObjectByField} from '../util/commonUtil';
import Config from '../Config';

export const DEFAULT_PAGE_SIZE = 6;

export const loadMovies = (page = 0, size = DEFAULT_PAGE_SIZE, movieLoadType, searchString = "", replaceExisting = false) => {
    dispatch({ type: 'LOADING_MOVIES', movieLoadType, isLoading: true });
    return request({
        url: `${Config.API.Movies[movieLoadType]}?page=${page}&size=${size}${searchString ? '&title=' + searchString : ''}`,
        method: 'GET'
    })
        .then((movies) => {
            let moviesObj = convertArrayToObjectByField(movies, "id");
            let allMoviesLoaded = movies.length < DEFAULT_PAGE_SIZE;
            setMovies(moviesObj, movieLoadType, replaceExisting, searchString, allMoviesLoaded);
            return movies;
        });
};

export const addToWatchList = (movieId) => {
    return request({
        url: `${Config.API.Movies.AddToWatchList}/${movieId}`,
        method: 'POST'
    })
        .then((movie) => {
            updateMovieWannaWatchState(movie, true);
            return movie;
        });
};

export const removeFromWatchList = (movieId) => {
    return request({
        url: `${Config.API.Movies.RemoveFromWatchList}/${movieId}`,
        method: 'DELETE'
    })
        .then((movie) => {
            updateMovieWannaWatchState(movie, false);
        });
};

export const setMovies = (movies, movieLoadType, replaceExisting, searchString, allMoviesLoaded) => {
    dispatch({
        type: 'SET_MOVIES',
        movies,
        movieLoadType,
        allMoviesLoaded,
        replaceExisting,
        searchString
    });
};

export const updateMovieWannaWatchState = (movie, refreshWatchList) => {
    dispatch({
        type: 'UPDATE_MOVIE_WATCH_LIST_STATE',
        movieId: movie.id,
        wannaWatch: movie.wannaWatch,
        refreshWatchList
    })
};