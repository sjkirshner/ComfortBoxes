module.exports = {
  createBoxInShoppingCart,
  removeBoxFromShoppingCart,
  addProductToBox,
  removeAllOfThisProductFromBox,
  removeOneInstanceOfProductFromBox,
  changeCurrentBox,
  getCopyOfShoppingCart
}

/*
ITEMS IN STORAGE:

localStorage.numberOfBoxes
localStorage.currentBoxId

POSSIBLE EXAMPLES OF localStorage.box{x}ProductIds
localStorage.box1ProductIds
localStorage.box2ProductIds
localStorage.box3ProductIds
*/

/*
NOTES FOR LOCAL STORAGE KEYS FORMATTED AS 'box{x}ProductIds':
(example: 'box1ProductIds')
Value of each of these keys is a list of the productIds that box holds, formatted as a string. Ex: '14,7,12,8'.
Each time a new box is added, createBoxInShoppingCart() adds a new box{x}ProductIds localStorage key, with x being equal to:
 (Number(localStorage.getItem('numberOfBoxes'))) +1
*/


//SARA: MAKE SURE TO DISCUSS THE SEMANTIC CHOICE OF PARAMETER BELOW BEING BASED ON VISITORS NOT BEING ALLOWED TO ORDER ANY OTHER ITEMS UNTIL THEY'VE SELECTED A BOX PRODUCT (AND NOT ALLOWED TO REMOVE BOX PRODUCT WITHOUT EITHER A: deleting the whole box OR B: replacing box selection with another box selection. (FOR SIMPLICITY'S SAKE, I'M LEANING TOWARDS CAN'T DELETE A BOX PRODUCT WITHOUT DELETING A BOX, THUS THEY'D JUST HAVE TO START THE BOX BUILDING PROCESS OVER WITH A DIFFERENT BOX SELECTION)

//'Creates' a box in the shopping cart & makes that box the 'currentBox' (parameter is the box product's product id under the assumption that a box should be created in shopping cart when a box product is added by customer):
function createBoxInShoppingCart(boxProductId){
  let boxId = 1 + (Number(localStorage.getItem('numberOfBoxes')));
  localStorage.setItem(`box${boxId}ProductIds`, boxProductId)
  localStorage.setItem('numberOfBoxes', boxId);
  localStorage.setItem('currentBoxId', boxId)
}

//Stores the product in currently selected box:
function addProductToBox(productId) {
  const currentBoxId = localStorage.getItem('currentBoxId');
  const currentProducts = localStorage.getItem(`box${currentBoxId}ProductIds`);
  if (currentProducts){
    localStorage.setItem(`box${currentBoxId}ProductIds`, `${currentProducts},${productId}`);
  } else {
    localStorage.setItem(`box${currentBoxId}ProductIds`, productId);
  }
}

//removes entire box from shopping cart
function removeBoxFromShoppingCart(boxId) {
  localStorage.removeItem(`box${boxId}ProductIds`);
  if (boxId == localStorage.currentBoxId){
    localStorage.setItem('currentBoxId', '')
  }
}

//removes all quantities of this product from this box
function removeAllOfThisProductFromBox(productId, boxId) {
  const productsInBox = localStorage.getItem(`box${boxId}ProductIds`);
  const productsSansTheRemoved = productsInBox.split(',').map(id => {
    if (id != productId) {
      return id
    }
  }).join(',')
  localStorage.setItem(`box${boxId}ProductIds`, productsSansTheRemoved);
}

//removes only one quantity of this product from this box
function removeOneInstanceOfProductFromBox(productId, boxId) {
  const productsInBox = localStorage.getItem(`box${boxId}ProductIds`);
  const length = ('' + productId).length + 1
  const index = productsInBox.indexOf(productId) - 1
  if (productsInBox.length > length - 1){
    if (index > 0) {
      localStorage.setItem(`box${boxId}ProductIds`, productsInBox.slice(0, index) + productsInBox.slice(index + length));
    } else {  //if it's the first item in list
      localStorage.setItem(`box${boxId}ProductIds`, productsInBox.slice(length + 1));
    }
  } else {
    //if removing only item left in box, remove box from cart
    removeBoxFromShoppingCart(boxId);
  }
}

//changes current box so that added items will add to this box (run when customer selects a different previously created box to edit)
function changeCurrentBox(newCurrentBoxId) {
  localStorage.setItem('currentBoxId', newCurrentBoxId);
}


// returns object version of the shopping cart (but note that it's only a representation of what is being stored, modifications to this object will not affect shopping cart in local storage)
function getCopyOfShoppingCart() {
  let cart = {};
  let idsUsed = Number(localStorage.getItem('numberOfBoxes'));
  for (let i = 1; i <= idsUsed; i++) {
    const str = localStorage.getItem(`box${i}ProductIds`)
    if (str) {
      const strProductArray = str.split(',');
      const productIdArray = strProductArray.map(productId => Number(productId))
      cart[i] = productIdArray;
    }
  }
  return cart;
}
/* example of possible cart return object from getCopyOfShoppingCart():
{
  1: [12, 14, 8, 2, 19, 12],  // note that product ids may be repeated if customer purchased more than one of that item for that box
  3: [18, 6, 3, 24, 11],
  4: [22, 20, 7, 13, 9, 17, 18, 4]
}
  NOTE: The keys in the object are the box ids that exist in the cart. These are typically incremental from one, unless a customer has removed a box from their order (such as box 2 in the example object). The values of those keys are arrays of the productIds within that particular box.
*/
