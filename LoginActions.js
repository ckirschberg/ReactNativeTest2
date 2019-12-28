// import firebaseSvc from './FirebaseSvc'

export const sendLoginAction = (user,succ, fail) => {
  console.log('sendLoginAction--pressing login... user:' + JSON.stringify(user));
  return (dispatch) => {
    // firebaseSvc.login(user, (loginUser) => {
        dispatch(loginSuccess(user));
    //     succ(loginUser);
    //   }
    //   , fail
    // );
  }
}

export const sendActionIncrement = () => {
  console.log("hi");
  return (dispatch) => {
    dispatch({ type: 'INCREMENT' })
  }
}
export const sendActionDecrement = () => {
  return (dispatch) => {
    dispatch({ type: 'DECREMENT' })
  }
}




export const sendLogoutAction = () => {
  console.log('sendLogoutAction...');
  return (dispatch) => {
    // firebaseSvc.logout();
    dispatch(logoutSuccess());
  }
}
export const loginSuccess = (user) => (
  {
    type: 'LOGIN',
    payload: user,
  }
);
export const logoutSuccess = () => (
  {
    type: 'LOGOUT',
  }
);
