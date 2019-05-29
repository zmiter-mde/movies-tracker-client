const initialState = {
    movies: [],
    isLoading: false,
    allMoviesLoaded: false
};

const movies = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_MOVIES':
            return {
                ...state,
                movies: [...state.movies, ...action.movies],
                isLoading: false,
                allMoviesLoaded: action.allMoviesLoaded
            };

        case 'LOADING_MOVIES': {
            return {
                ...state,
                isLoading: action.isLoading
            };
        }

        default:
            return state;

    }

};

export default movies;