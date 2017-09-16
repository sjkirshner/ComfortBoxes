import React, {Component} from 'react';
import { connect } from 'react-redux';

//BUILD BOX CONTAINER
//displays all categories and products for a selected category
export default class BuildBox extends Component {
  componentDidMount () {
    // fetch categories and products
  }

  /**
   * Category.{fieldName}
   * Category.product === ARRAY w/ each idx a product
   * Fetch all categories
   *   GET '/api/categories'
   *      Category.findAll()
   *        .then(categories => {
   *          res.json(categories)
   *        })
   *        .catch(console.error.bind(error));
   *
   * function thunkFetchCategories() {
   *   return (dispatch, getState) => {
   *     axios.get('/api/categories')
   *      .then(res => res.data)
   *      .then(categories => {
   *        dispatch( someActionCreator(categories) )
   *      })
   *   }
   * }
   *
   *
   *
   */
  render () {
    return (
      <div id='buildboxPage' className='page'>
        <div className='categoryList'>
          {
            ['Box', 'Sights', 'Tastes', 'Smells', 'Touch', 'Sound'].map((title, i) => {
              return (
                <div key={i} className='category'>
                  <img src='https://blog.mrprintables.com/wp-content/uploads/2013/10/1_Instant_Comfort_pocket_box_craft_little_gatherer.jpg' alt='category_image'/>
                  <div>{title}</div>
                </div>
              )
            })
          }
        </div>
        <div className='productList'>
          {
            [1,2,3,4,5,6,7,8].map(i => {
              return (
                <div key={i} className='product'>
                  <img src='https://blog.mrprintables.com/wp-content/uploads/2013/10/1_Instant_Comfort_pocket_box_craft_little_gatherer.jpg' alt='product_image'/>
                  <div>Product Name</div>
                  <button>Add</button>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state){
// get states from store
// }

// function mapDispatchToProps(dispatch){
// get thunk or actioncreators from store
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BuildBox);

