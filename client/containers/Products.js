export default function Products ({category}) {
  return (
    <div className='productList'>
      {
        category.products.map(product => {
          return (
            <div key={product.id} className='product'>
              <img src={product.img}/>
              <div>{product.title}</div>
              <button>Add</button>
            </div>
          )
        })
      }
    </div>
  );
}
