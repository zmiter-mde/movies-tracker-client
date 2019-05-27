const initialState = {
    movies: []
};

const movies = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_MOVIES':
            return {
                ...state,
                movies: [...state.movies, ...action.movies],
                allMoviesLoaded: action.allMoviesLoaded
            };

        default:
            return state;

    }

};

export default movies;