const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

//we create to make sure to not send an empty category the backned
const categoryParam = category ? "?category="+category :''
// Everything in the url after the ? is called query param
// parametrer category sends to get a data from category 
fetch("https://kea-alt-del.dk/t7/api/products" + categoryParam)
  .then((res) => res.json())
  .then(showProducts);
// To pass data to the backend in the GET requests you can pass it in a different formats"
// - google.com/category/clothes
// = google.com?category=clothes



// GET requests 
// To communicate with the backed (server/database), there are different types of requests
// GET :get and display data in the frontend 
//  POST:^send data from teh frontend to backend
// PUT:^update data in the backend
// Delete:^deletes data from the backend

//Loop

function showProducts(products) {
  //Looper og kalder showProduct enkel
  products.forEach(showProduct);
  
}
function showProduct(product) {
  // console.log(product);
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


   
    /* if (product.soldout){
      //produktet er udsolgt
      copy.querySelector(".SmallProdukt").classList.add(soldOut);
    } */
    copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

   //apende
target.appendChild(copy); 

}
