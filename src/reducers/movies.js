import {removeProperty} from '../util/commonUtil';

const initialMovieListState = {
    movies: {},
    isLoading: false,
    allMoviesLoaded: false
};

const initialState = {
    allMovies: { ...initialMovieListState },
    myWatchList: { ...initialMovieListState },
    movieSearch: { ...initialMovieListState }
};

const movieLoadTypeMap = {
    All: 'allMovies',
    MyWatchList: 'myWatchList',
    Search: 'movieSearch'
};

const movies = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_MOVIES':
            const movieLoadType = movieLoadTypeMap[action.movieLoadType];

            return action.replaceExisting ? {
                ...state,
                [movieLoadType]: {
                    movies: {...action.movies},
                    isLoading: false,
                    allMoviesLoaded: action.allMoviesLoaded,
                    searchString: action.searchString
                }
            } : {
                ...state,
                [movieLoadType]: {
                    movies: {...state[movieLoadType].movies, ...action.movies},
                    isLoading: false,
                    allMoviesLoaded: action.allMoviesLoaded,
                    searchString: action.searchString
                }
            };

        case 'UPDATE_MOVIE_WATCH_LIST_STATE': {
            let {movieId, wannaWatch, refreshWatchList}= action;
            return {
                ...state,
                allMovies: state.allMovies.movies[movieId] ? {
                    ...state.allMovies,
                    movies: {
                        ...state.allMovies.movies,
                        [movieId]: {
                            ...state.allMovies.movies[movieId],
                            wannaWatch
                        }
                    }
                } : {
                    ...state.allMovies
                },
                movieSearch: state.movieSearch.movies[movieId] ? {
                    ...state.movieSearch,
                    movies: {
                        ...state.movieSearch.movies,
                        [movieId]: {
                            ...state.movieSearch.movies[movieId],
                            wannaWatch
                        }
                    }

                } : {
                    ...state.movieSearch
                },
                myWatchList: refreshWatchList ? { ...initialMovieListState } : {
                    ...state.myWatchList,
                    movies: removeProperty(movieId, state.myWatchList.movies)
                }
            };
        }

        case 'LOADING_MOVIES': {
            const movieLoadType = movieLoadTypeMap[action.movieLoadType];
            return {
                ...state,
                [movieLoadType]: {
                    ...state[movieLoadType],
                    isLoading: action.isLoading
                }
            };
        }

        default:
            return state;

    }

};

export default movies;