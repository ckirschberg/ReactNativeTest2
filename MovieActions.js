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


  export function setMovies(movies) {
    console.log("3-----------------------------");
    console.log(movies);
    return {
      type: 'GET_MOVIES',
      payload: movies,
    };
  }
  
  export function getMovies() {
    return async (dispatch) => {
      try {
        const apiReq = await fetch('http://dummy.restapiexample.com/api/v1/employees', {
          method: 'GET'
        }).then(response => response.json());

        await dispatch(setMovies(apiReq.slice(1,10)));
        
        return apiReq || [];
      } catch (error) {
        console.error(error);
      }
    };
  }