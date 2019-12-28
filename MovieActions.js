export const actionCreateMovie = (movie) => {
    return (dispatch) => {
      dispatch({ type: 'CREATE_MOVIE', payload: movie })
    }
  }
  export const actionGetMovies = () => {
    return (dispatch) => {
      dispatch({ type: 'GET_MOVIES' })
    }
  }
  export const actionAddToFavoriteMovies = (movie) => {
    console.log("movie", movie);  
    return (dispatch) => {
          dispatch({ type: 'ADD_TO_FAVORITE', payload: movie })
      }
  }
  