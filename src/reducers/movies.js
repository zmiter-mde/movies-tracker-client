const initialMovieListState = {
    movies: [],
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
                    movies: [...action.movies],
                    isLoading: false,
                    allMoviesLoaded: action.allMoviesLoaded,
                    searchString: action.searchString
                }
            } : {
                ...state,
                [movieLoadType]: {
                    movies: [...state[movieLoadType].movies, ...action.movies],
                    isLoading: false,
                    allMoviesLoaded: action.allMoviesLoaded,
                    searchString: action.searchString
                }
            };

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