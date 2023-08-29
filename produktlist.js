fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

//Loop

function showProducts(products) {
  //Looper og kalder showProduct enkel
  products.forEach(showProduct);
}
function showProduct(product) {
  //fange template
  const template = document.querySelector("#SmallProduktTemplate").content;
  const target = document.querySelector(".produkliste");
  console.log(target);
  //lave en kopy
  const copy = template.cloneNode(true);

  // ændre inhold
copy.querySelector("h3").textContent = product.productdisplayname;
 copy.querySelector("p.subtitle").textContent = product.subcategory;
 copy.querySelector(".productprice").textContent = product.price;


// Image
//copy.querySelector("img").src = product.brandimage; 
copy.querySelector("img").src=`http://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;


    if (product.soldout){
        //produkt er usolgt
        copy.querySelector("article").classList.add("soldout");
    }

   //apende
target.appendChild(copy); 

}
