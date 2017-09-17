import axios from 'axios';

//Action
const CREATE_USER = 'CREATE_USER'

//Action Creator
export const createUser = user => ({ type: CREATE_USER, user });

//Reducer
export default function(users = [], action){
  switch (action.type){
    case CREATE_USER:
      return [action.user, ...users];

    default:
      return users;
  }
}

//Thunk Creator
export const addUser = user => dispatch => {
  axios.post('/api/users', user)
  .then(res => dispatch(createUser(res.data)))
  .catch(err => console.error(`Creating user: ${user} unsuccesful`, err));
};

// export function fetchUsers () {
//   return (dispatch, getState) => {
//     axios.get('/api/users')
//       .then(res => res.data)
//       .then(users => {
//         dispatch({
//           type: FETCH_USERS,
//           users
//         });
//       })
//   }
// }
