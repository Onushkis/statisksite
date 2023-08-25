//https://kea-alt-del.dk/t7/api/products/665

fetch("https://kea-alt-del.dk/t7/api/products/1525")
    .then((response)=>response.json())
    .then((data)=>showProduct(data));

    function showProduct(product){
        console.log(product);

        document.querySelector(".produkt_info h3").textContent=
        product.productdisplayname;

        // I Dont Understand two h3 how to reach the second one, 

        /* document.querySelector(".produkt_info span:nth-child(2) h4").textContent=
        product.basecolour; */

          document.querySelector(".produkt_info h4").textContent=
        product.gender; 
       
        

    document.querySelector(".produkt_info .brand").textContent=
        product.brandname;
        document.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
    }
   