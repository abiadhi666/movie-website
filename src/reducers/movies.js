import {
  GET_MOVIES_DETAIL,
  GET_MOVIES_LIST
} from "../actions/movieAction";

let initialState = {
  search: null,
  title: "Movie Website",
  getMoviesList: false,
  errorMoviesList: false,
  getMoviesDetail: false,
  errorMoviesDetail: false,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return {
        ...state,
        getMoviesList: action.payload.data,
        errorMoviesList: action.payload.errorMessage,
      };

    case GET_MOVIES_DETAIL:
      return {
        ...state,
        getMoviesDetail: action.payload.data,
        errorMoviesDetail: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default movies;