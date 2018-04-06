var appendHP = "<tr><td>Harry Potter and the Order of the Phoenix</td><td></td><td>$12.99</td></tr>";
var appendWT = "<tr><td>Wheel of Time #1: The Eye of the World</td><td>1</td><td>$9.99</td></tr>";
var appendP1 = "<tr><td>Ready Player One</td><td>1</td><td>$15.99</td></tr>";
$('#btnAddToCartHP').click(function(){
    $('#myTable').append(appendHP);
    console.log("appended");
});

$('#btnAddToCartWT').click(function(){
    $('#myTable').append(appendWT);
    console.log("appended");
});

$('#btnAddToCartP1').click(function(){
    $('#myTable').append(appendP1);
    console.log("appended");
});

