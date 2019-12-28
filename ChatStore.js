import { combineReducers } from 'redux'
import { movieReducer } from './MovieReducer'

const defaultState = {
  username: "nobody",
  name: "my name",
  email: "test2@gmail.com",
  password: "test123",
  avatar: '',
  loginSuccess: false,
  counter: 0
};

const loginReducer = (state=defaultState, action) => {
  console.log("...chatstore...");


  switch(action.type) {
    case "INCREMENT":
      console.log("state was:", state.counter);
      return Object.assign({}, state, {counter: state.counter+1});
    
    case "DECREMENT":
        console.log("state was:", state.counter);
      return Object.assign({}, state, {counter: state.counter-1});
  
    case "LOGIN":
      console.log('...chatstore: LOGIN action --- email:' + action.payload.email);
      return Object.assign({}, state, {
          email: action.payload.email,
          loginSuccess: true,
      });
    case "LOGOUT":
      console.log('...chatstore: LOGOUT action --- ');
      return Object.assign({}, state, {
          loginSuccess: false,
      });
    default:
      return state;
  }
}

export default combineReducers({ login: loginReducer, movie: movieReducer })
