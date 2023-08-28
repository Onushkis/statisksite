fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

//Loop

function showProducts(products) {
  //Looper og kalder showProduct enkel
  products.forEach(showProduct);
}
function showProduct(product) {
    console.log(product);
  //fange template
  //lave en kopy
  // ændre inhold
  //apende
}
