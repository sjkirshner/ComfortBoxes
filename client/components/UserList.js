import React from 'react';

/**
 * OrderList component:
 * Displays list of orders for reviewing by status and editing status category
 */
export default function UserList ({users, handleDelete, handlePromote}) {
  return (
    <div id='userList'>
      <h4>User List</h4>
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              {user.email}
              {
                !user.isAdmin
                  ? <button value={user.id} onClick={handlePromote}>PROMOTE</button> : null
              }
              <button
                value={user.id}
                onClick={handleDelete}>DELETE</button>
            </li>
          ))
        }
      </ul>
    </div>
    )
}
