let products = [];
let total = 0;

function add(product, price){
    console.log(product,price);
    products.push(product);
    total = total + price;
    document.getElementById("check").innerHTML = `Pagar $${total}`
}
function pay(){
    console.log(product, price);
    window.alert(products.join(",\n"))
}