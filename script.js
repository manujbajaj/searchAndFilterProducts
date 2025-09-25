(async()=>{
    const url="https://fakestoreapi.com/products";
    const productContainerEL=document.getElementById("productContainer");
    const searchInputEL=document.getElementById("searchInput");
    const fetchProducts=async()=>{
        try{
            const res=await fetch(url);
            const sol=await res.json();
            console.log(sol);
            return sol;
        }
        catch(error){
            return error;
        }


    }

    
    const products=await fetchProducts();

    const generateProducts=(product)=>{
        return `<div class="productCard">
            <div class="imageContainer">
                <img src="${product.image}" alt="">
            </div>
            <div class="productContent">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <button>${product.price} $</button>
            </div>
        </div>`;
    }


    const renderProducts=(products)=>{
        productContainerEL.innerHTML="";
        products.forEach((product)=>{
            productContainerEL.innerHTML+=generateProducts(product);
        })
    }



    const filterHandler=(event)=>{
        const searchText=event.target.value.toLowerCase();

        const filterProducts=products.filter((product)=>{
            return product.title.toLowerCase().includes(searchText);
        })
        renderProducts(filterProducts);
    }


    searchInputEL.addEventListener("keyup",filterHandler)
    renderProducts(products);
})();
