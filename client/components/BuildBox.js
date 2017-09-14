import React, {Component} from 'react';
import { connect } from 'react-redux';

//BUILD BOX CONTAINER
//displays all categories and products for a selected category
export default class BuildBox extends Component {
  componentDIdMount () {

  }

  render () {
    return (
      <div id='buildboxPage' className='page'>
        <div className='categoryList'>
          Categories
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

// }

// function mapDispatchToProps(dispatch){

// }

// export default connect(mapStateToProps, mapDispatchToProps)(BuildBox);
