// userActions.js
export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users,
  });
  
  export const fetchUsers = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch(setUsers(data)))
      .catch((error) => console.error('Error fetching users:', error));
  };
  