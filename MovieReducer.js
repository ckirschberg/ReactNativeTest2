const defaultState = {
    user: { name: 'Christian Kirschberg' },
    favoriteMovies: [],
    movies: [
      {id: '1', title: 'What women want', productionYear: 2000, imageUrl: 'https://i-viaplay-com.akamaized.net/viaplay-prod/412/684/1547103088-2af2513754d011a7bd98ebd3ec247736892b8798.jpg?width=400&height=600'},
      {id: '2', title: 'What women want 2', productionYear: 2002, imageUrl: 'https://i-viaplay-com.akamaized.net/viaplay-prod/412/684/1547103088-2af2513754d011a7bd98ebd3ec247736892b8798.jpg?width=400&height=600'}
    ]
  };

export const movieReducer = (state=defaultState, action) => {
  
    switch(action.type) {
      case "GET_MOVIES":
        console.log("4-----------------------------");  
        console.log(JSON.stringify(action.payload));
        return Object.assign({}, state, {movies: action.payload});
      
      case "CREATE_MOVIE":
        return Object.assign({}, state, {movies: [...state.movies, action.payload]});
    
    case "ADD_TO_FAVORITE":
        // console.log("---------------");
        // console.log(state.favoriteMovies);
        return Object.assign({}, state, { favoriteMovies: [...state.favoriteMovies, action.payload] });
    
    default:
        return state;
    }
  }
  