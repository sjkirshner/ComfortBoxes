import React from 'react';

export default function ProductList ({category}) {

  return (
    <div className='productList'>
    {
      [1,2,3,4,5,6,7,8].map(i => {
        return (
          <div key={i} className='product'>
            <img src='https://blog.mrprintables.com/wp-content/uploads/2013/10/1_Instant_Comfort_pocket_box_craft_little_gatherer.jpg' alt='product_image'/>
            <div>{category} Product</div>
            <button>Add</button>
          </div>
        )
      })
    }
    </div>
  );
}
