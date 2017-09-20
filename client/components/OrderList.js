import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

/**
 * OrderList component:
 * Displays list of orders for reviewing by status and editing status category
 */
export class OrderList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const statusCategories = ['created', 'processing', 'cancelled', 'completed']
    return (
      <div>
        <div className='statusLinks'>
        {
          statusCategories.map((status, i) =>
            <Link
              key={i}
              to={`/admin/orders${status}`}>
              {status}
            </Link>
          )
        }
        </div>
        <ul>
            {
              this.props.orders.map(order => (
                <li key={order.id}>
                  {order.status}
                  {order.user_id || order.sessionId}
                  {order.address}
                  {order.city}
                  {order.state}
                  {order.email}
                  <select value={order.id}>
                    {statusCategories.map(statusCategory => (
                      <option value={statusCategory}>{statusCategory}</option>
                    ))}
                  </select>
                </li>
              ))
            }
          </ul>
      </div>
    )
  }
}

// function Orders ({status}) {
//     // Filter orders on status
//     //
//     return (
//     <div className='productList'>
//       {
//         category.products.map(product => {
//           return (
//             <div key={product.id} className='product'>
//               <NavLink to={`/products/${product.id}`}>
//                 <img src={product.img}/>
//               </NavLink>
//               <div>{product.title}</div>
//               <button name={product.id} onClick={addAProductToBox}>Add</button>
//             </div>
//           )
//         })
//       }
//     </div>
//   );
// }
