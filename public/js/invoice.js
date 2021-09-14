const doc = document
const productList = [
    {
      "name": "Honey Whole Wheat",
      "description": "Whole wheat bread with organic honey and a hint of organic coconut.",
      "photo": "./assets/images/products/honey-oat.png",
      "nutrition-info": "url/photo",
      "available": "yes",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$4.50"
    },
    {
      "name": "Traditional Sourdough",
      "description": "Playful cinnamon accents make this braided loaf a delightful treat to enjoy over the holiday season. Prepare your favourite french toast batter recipe for a unique and impressive breakfast offering!",
      "photo": "./assets/images/products/honey-oat.png",
      "nutrition-info": "url/photo",
      "available": "no",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$6.50"
    },
    {
      "name": "Italian Herb and Old Cheddar",
      "description": "Traditional Focaccia bread made with a blend of Italian spices and old cheddar. Pairs well with tomato-based pasta dishes, Merlot (oaked, dry), Cabernet Sauvignon, and Sangiovese. A taste of Italy!",
      "photo": "./assets/images/products/honey-oat.png",
      "nutrition-info": "url/photo",
      "available": "yes",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$5.45"
    },
    {
      "name": "Sea Salt & Pepper Focaccia",
      "description": "Traditional Focaccia bread made with a blend of Himalayan Sea Salt and fresh cracked pepper. A verstaile snack or a delicious side!",
      "photo": "",
      "nutrition-info": "url/photo",
      "available": "yes",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$4.35"
    },
    {
      "name": "Dinner Rolls",
      "description": "White or whole wheat dinner rolls, the perfect companion for a bowl of soup, or to compliment the family dinner.",
      "photo": "./assets/images/products/rolls.png",
      "nutrition-info": "url/photo",
      "available": "yes",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$4.06"
    },
    {
      "name": "Garlic Knots",
      "description": "A classic Italian snack or side, our heart-healthy garlic knots are made with the perfect blend of garlic powder, oregano and parmesan cheese with just a pinch of salt.",
      "photo": "garlic-knots.png",
      "nutrition-info": "url/photo",
      "available": "yes",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$3.50"
    },
    {
      "name": "Homemade Pizza Kits",
      "description": "Make your own Pilgrim's Finest Pizza! Enjoy all the deliciousness of a pizza homemade pizza with a fraction of the effort. Our signature dough is ready to spread on the pan or stone, just add your favourite sauce and toppings!",
      "photo": "./assets/images/products/pizza-kit.png",
      "nutrition-info": "url/photo",
      "available": "yes",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$7.55"
    },
    {
      "name": "Chocolate Babka",
      "description": "Rich chocolate layers are woven into this luxurious braided loaf, to be enjoyed as a dessert with specialty coffee, drizzled with caramel, or as a companion to your favourite ice cream. Enjoy this holiday treat with a glass of egg nog or chilled Irish Cream. ",
      "photo": "./assets/images/products/choc-babka.png",
      "nutrition-info": "url/photo",
      "available": "soon",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$8.38"
    },
    {
      "name": "Cinnamon Babka",
      "description": "Playful cinnamon accents make this braided loaf a delightful treat to enjoy over the holiday season. Prepare your favourite french toast batter recipe for a unique and impressive breakfast offering!",
      "photo": "./assets/images/products/honey-oat.png",
      "nutrition-info": "url/photo",
      "available": "soon",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$7.55"
    },
    {
      "name": "Molassess Bread",
      "description": "Playful cinnamon accents make this braided loaf a delightful treat to enjoy over the holiday season. Prepare your favourite french toast batter recipe for a unique and impressive breakfast offering!",
      "photo": "",
      "nutrition-info": "url/photo",
      "available": "yes",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$6.50"
    },
    {
      "name": "Cinnamon Raisin Bread",
      "description": "Playful cinnamon accents make this braided loaf a delightful treat to enjoy over the holiday season. Prepare your favourite french toast batter recipe for a unique and impressive breakfast offering!",
      "photo": "",
      "nutrition-info": "url/photo",
      "available": "yes",
      "locations": ["Noggins Sante Centre"],
      "wholesale": "$5.50"
    }
  ]
  
const vendorList = [
  "King's Produce (Sante)", 
  "King's Produce (Forum)",
  "King's Produce (Robie)",
  "OBEE's Market Alderney",
]
let productCounter;

window.onload = function() {
  const vendorSelector = doc.getElementById('vendor-list')
  let vendorOption = doc.createElement('option');
  vendorOption.value = ''
  vendorOption.text = 'Select a vendor...'
  vendorSelector.add(vendorOption);

  for (let i = 0; i < vendorList.length; i++) {
    let vendorOption = doc.createElement('option');
    vendorOption.value = vendorList[i];
    vendorOption.text = vendorList[i];
    vendorSelector.add(vendorOption);
  }
    vendorOption = doc.createElement('option');
    vendorOption.value = '';
    vendorOption.text = 'Add new vendor...';
    vendorSelector.add(vendorOption);

    addProduct();
}

function addProduct() {
  
  const productsContainer = doc.getElementById('products');
  let newDiv;
  let newSelector;
  let newProductOption;
  let newQtyLabel;
  let newQty;
  let newPriceLabel;
  let newPrice;
  let newTotalLabel;
  let newTotal;

// Track total products
  productCounter = parseInt(doc.getElementById('product-counter').name);


// Create div for new product
  newDiv = doc.createElement('div');
  newDiv.id = `product-${productCounter}`;
  
// Create new product selector
  newSelector = doc.createElement('select');
  newSelector.id = `selector-${productCounter}`;
  newProductOption = doc.createElement('option');
  newProductOption.value = '';
  newProductOption.text = 'Select a product...';
  newSelector.add(newProductOption);

  // Populate selector
  for (let i = 0; i < productList.length; i++) {

    newProductOption = doc.createElement('option');
    newProductOption.value = productList[i].name;
    newProductOption.text = productList[i].name;
    newSelector.add(newProductOption);

  } 

// Create quantity field
  newQtyLabel = doc.createElement('label');
  newQtyLabel.appendChild(doc.createTextNode(' x '));
  newQty = doc.createElement('input');
  newQty.id = `qty-${productCounter}`;
  newQty.type = 'number';
  newQty.label = 'qty';

// Create Price Field:
  newPriceLabel = doc.createElement('label');
  newPriceLabel.appendChild(doc.createTextNode('  $ '));
  newPrice = doc.createElement('input');
  newPrice.id = `price-${productCounter}`;
  newPrice.type = 'number';
  newPrice.label = 'price';

// Create Total Field:
  newTotalLabel = doc.createElement('label');
  newTotalLabel.appendChild(doc.createTextNode(' = $'));
  newTotal = doc.createElement('input');
  newTotal.id = `total-${productCounter}`;
  newTotal.name = 'total';
  newTotal.type = 'number';
  newTotal.label = 'total';

// Create remove product button
  // const deleteProduct = document.createElement('input');
  // deleteProduct.id = `rmv-${productCounter}`
  // deleteProduct.setAttribute('type', 'button');
  // deleteProduct.setAttribute('class', 'btn-delete');
  // deleteProduct.setAttribute('value', 'x');
  // deleteProduct.setAttribute('onclick', `removeProduct('${newDiv.id}');`);

// Assemble & Inject
  productsContainer.appendChild(newDiv);
  newDiv.appendChild(newSelector);
  newDiv.appendChild(newPriceLabel);
  newDiv.appendChild(newPrice);
  newDiv.appendChild(newQtyLabel);
  newDiv.appendChild(newQty);
  newDiv.appendChild(newTotalLabel);
  newDiv.appendChild(newTotal);
  // newDiv.appendChild(deleteProduct);

// Apply Listeners
  doc.querySelector(`#selector-${productCounter}`).addEventListener('change', (e) => {
    e.stopPropagation();
    getPrice(`selector-${productCounter}`);
    updatePrice(`qty-${productCounter}`);
  });
  doc.querySelector(`#qty-${productCounter}`).addEventListener('change', (e) => {
    e.stopPropagation();
    updatePrice(`qty-${productCounter}`);
  });
  doc.querySelector('#product-counter').name = productCounter + 1;
}

function addNewProduct() {
  if (doc.getElementById(`selector-${productCounter}`).value === '') { 
    alert('Please select a product');
    document.getElementById(`selector-${productCounter}`).focus();
  } else if (doc.getElementById(`qty-${productCounter}`).value === '') {
    alert('Please enter a quantity');
    document.getElementById(`qty-${productCounter}`).focus();
  } else { 
    addProduct(); 
  }
}

function removeProduct(product) {
  console.log(productCounter);
  console.log('Delete product button pressed with:', product)
  document.getElementById(product).remove();
  updateTotal();
}

// To make the above two functions work together, it will be necessary to eliminate the hidden DOM counter element and instead track the product count by pushing div IDs into an array. The length of the array will be equal to the number of products on the invoice, and each ID in the array can be used to validate the data input into each div's respective fields.

function getPrice(selector) {
  const listItem = doc.getElementById(selector).value
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].name === listItem) {
      doc.getElementById(`price-${selector[selector.length -1]}`).value = productList[i].wholesale.substring(1);
    }
  }  
}

function updatePrice(quantity) {
  const basePrice = doc.getElementById(`price-${quantity[quantity.length -1]}`).value;
  const qtySold = doc.getElementById(`qty-${quantity[quantity.length -1]}`).value;
  const subtotal = parseFloat(basePrice).toFixed(2) * parseFloat(qtySold).toFixed(2);
  doc.getElementById(`total-${quantity[quantity.length -1]}`).value = subtotal.toFixed(2);
  updateTotal();
}

function updateTotal() {
  doc.getElementById('grand-total').value = '';
  let grandTotal = 0;
  const productTotals = doc.getElementsByName('total');
  for (let i = 0; i < productTotals.length; i++) {
      grandTotal += parseFloat(productTotals[i].value);
  }
  if (!isNaN(grandTotal)) {
    doc.getElementById('grand-total').value = grandTotal.toFixed(2).toString()
  }
}             

function printInvoice() {
  console.log(document.getElementById('vendor-list').value)
  if (sanityCheck() === false) {
    console.log('Failed sanity check, halted.');
    return;
  } else {
    console.log('Sanity check passed, printing...');
    document.getElementById('add-product').style.visibility = 'hidden';
    document.getElementById('print').style.visibility = 'hidden';
    // const arr = document.getElementsByClassName('btn-delete')
    // for (let i = 0; i < arr.length; i++) {
    //   arr[i].style.visibility = 'hidden';
    // }
    window.print();
  }
}

function restoreButtons() {
  document.getElementById('add-product').style.visibility = 'visible';
  document.getElementById('print').style.visibility = 'visible';
  // const arr = document.getElementsByClassName('btn-delete')
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i].style.visibility = 'visible';
  // }
}

function sanityCheck() {

  if (document.getElementById('invoice-number').value === '') {
    alert('Please Input an Invoice Number');
    document.getElementById('invoice-number').focus();
    return false;
  }
  if (document.getElementById('invoice-date').value === '') {
    alert('Please Input a Date');
    document.getElementById('invoice-date').focus();
    return false;
  }
  if (document.getElementById('vendor-list').value === '') {
    alert('Please Select a Vendor');
    document.getElementById('vendor-list').focus();
    return false;
  }
  return true;
}