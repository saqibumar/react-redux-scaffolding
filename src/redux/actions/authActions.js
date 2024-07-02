// authActions.js
export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  export const login = (credentials) => (dispatch) => {
    // Handle login logic here, for example fetching the user from an API or local storage
    const user = { name: 'John Doe' }; // Replace with actual user fetching logic
    dispatch(loginSuccess(user));
  };
  