//https://kea-alt-del.dk/t7/api/products/665
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Loader
if(!id){
    setTimeout(()=>{

        document.querySelector('.loader')?.remove()
        }, 500)
}

// Promise .then() .finally()
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data))
//   .then((data) => document.querySelector('.loader')?.remove())

function showProduct(product) {
  console.log(product);

  document.querySelector(".produkt_info .model-name").textContent =
    product.productdisplayname;

  // I Dont Understand two h3 how to reach the second one h4, præcis den:h4
  document.querySelector(".produkt_info h4:nth-of-type(2) span").textContent =
    product.basecolour;

  document.querySelector(".produkt_info h4").textContent = product.gender;
  document.querySelector(".produkt_info .description").textContent = product.description 
  document.querySelector(".produkt_info .materialcaredesc").textContent = product.materialcaredesc 





  document.querySelector(".produkt_info .brand").textContent =
    product.brandname;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  

//   Any thing above 300 ms will be observed by the user eye
// Any thing above 16.666667 the user will notice that something has gone wrong but he couldn't observe it => 60 frames per seconds.
  setTimeout(()=>{

  document.querySelector('.loader')?.remove()
  }, 500)
}
