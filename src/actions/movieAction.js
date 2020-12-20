import axios from "axios";

export const GET_MOVIES_LIST = "GET_MOVIES_LIST";
export const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL";

export const getMoviesList = () => {
    return (dispatch) => {
        axios.get("https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies")
            .then(function (response) {
                dispatch({
                    type: GET_MOVIES_LIST,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_MOVIES_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })
    }
}

export const getMoviesDetail= (id) => {
    return (dispatch) => {
        axios.get("https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies/"+id)
            .then(function (response) {
                dispatch({
                    type: GET_MOVIES_DETAIL,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_MOVIES_DETAIL,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })
    }
}