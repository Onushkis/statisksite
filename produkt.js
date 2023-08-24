//https://kea-alt-del.dk/t7/api/products/665

fetch("https://kea-alt-del.dk/t7/api/products/1525")
    .then((response)=>response.json())
    .then((data)=>showProduct(data));

    function showProduct(product){
        console.log(product);
        document.querySelector(".produkt_info h3").textContent=
        product.productdisplayname;

     
        

    document.querySelector(".produkt_info .brand").textContent=
        product.brandname;
        document.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
    }
   