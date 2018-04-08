//var appendHP = "<tr><td>Harry Potter and the Order of the Phoenix</td><td></td><td>$12.99</td></tr>";
<<<<<<< HEAD
//var appendWT = "<tr><td>Wheel of Time #1: The Eye of the World</td><td>1</td><td>$9.99</td></tr>";
//var appendP1 = "<tr><td>Ready Player One</td><td>1</td><td>$15.99</td></tr>";
=======
var appendWT = "<tr><td>Wheel of Time #1: The Eye of the World</td><td>1</td><td>$9.99</td></tr>";
var appendP1 = "<tr><td>Ready Player One</td><td>1</td><td>$15.99</td></tr>";

var bookNames = [];
var bookQuantities = [];

function Test(){
    alert(bookNames);
    alert(bookQuantities);
}

>>>>>>> 35a7396d1e388b00c02e22785814acb47a586478
$('#btnAddToCartHP').click(function(){
    var quantityHP = $('#orderQuantityHP').val();
    $('#myTable').append("<tr><td>Harry Potter and the Order of the Phoenix</td><td>"+quantityHP+"</td><td>$12.99</td></tr>");
    console.log("appended");
<<<<<<< HEAD
=======
    bookNames.push("Harry Potter and the Order of the Phoenix");
    bookQuantities.push(quantityHP);
>>>>>>> 35a7396d1e388b00c02e22785814acb47a586478
});

$('#btnAddToCartWT').click(function(){
    var quantityWT = $('#orderQuantityWT').val();
    $('#myTable').append("<tr><td>Wheel of Time #1: The Eye of the World</td><td>"+quantityWT+"</td><td>$9.99</td></tr>");
    console.log("appended");
    bookNames.push("Wheel of Time #1: The Eye of the World");
    bookQuantities.push(quantityWT);
});

$('#btnAddToCartP1').click(function(){
    var quantityP1 = $('#orderQuantityP1').val();
    $('#myTable').append("<tr><td>Ready Player One</td><td>"+quantityP1+"</td><td>$15.99</td></tr>");
    console.log("appended");
    bookNames.push("Ready Player One");
    bookQuantities.push(quantityP1);
});

