import axios from 'axios';

//Action
const CREATE_USER = 'CREATE_USER';
const GET_USERS = 'GET_USERS';

//Action Creator
export const createUser = user => ({ type: CREATE_USER, user });

//Thunk Creator
export const addUser = user => dispatch => {
  axios.post('/api/users', user)
  .then(res => dispatch(createUser(res.data)))
  .catch(err => console.error(`Creating user: ${user} unsuccesful`, err));
};

export function getUsers () {
  return dispatch => {
    axios.get('/api/users')
      .then(res => res.data)
      .then(users => {
        dispatch({
          type: GET_USERS,
          users
        });
      })
  }
}

//Reducer
export default function(users = [], action){
  switch (action.type){
    case CREATE_USER:
      return [action.user, ...users];

    case GET_USERS:
      return action.users;

    default:
      return users;
  }
}
