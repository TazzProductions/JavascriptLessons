'use strict';
var productlist = [
    {
        name:"Ham",
        price: 5.00
    },
    {
        name:"Turkey",
        price: 5.50
    },
    {
        name:"Bread",
        price: 6.00
    },
    {
        name:"Cheese",
        price: 6.50
    },
    {
        name:"Mustard",
        price: 7.00
    },
];
var shoppingList = [];
var shopping = true;
function loadproducts() {
    var productsOutput = document.getElementById("products");
    var output = '<tr><th>Item #</th><th>Product</th><th>Price</th></tr>';

    productlist.forEach((el,idx) => {
        output += "<tr><td>" + (idx + 1) + "</td><td>" + el.name + "</td><td>$" + el.price.toFixed(2) + "</td></tr>";
    });

    productsOutput.innerHTML = output;
}
function loadList() {
    var listOutput = document.getElementById('list');
    var output = "<tr><th>Quantity</th><th>Product</th><th>Total</th></tr>";
    
    shoppingList.forEach(el => {
        output += "<tr><td>" + el.count + "</td><td>" + el.name +"</td><td>$" + el.price.toFixed(2) + "</td></tr>";

        
    })

}