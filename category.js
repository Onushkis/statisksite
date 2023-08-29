const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/categories")
    .then((response)=>response.json())
    .then((data)=>showCategories(data));
    
    function showCategories(cats){
        cats.forEach(showCategory)
    }

    function showCategory(cat){

        // fange template
        const template = document.querySelector("template").content
        //clone or coppy sammen
      const clone = template.cloneNode(true);
        // ændre inhold
clone.querySelector("a").textContent = cat.category;
//for list 
clone.querySelector("a").href = `produktslist.html?category=${cat.category}`

        // apender hvor skal den ligger ( listen)

        document.querySelector(".categorylist ol").appendChild(clone);
    }