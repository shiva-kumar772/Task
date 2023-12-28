var cont=document.querySelector(".card-container")
let globalArr;
async function fetchData() {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    const data = await response.json();
     globalArr=await data
    // console.log(data.categories);

    data.categories.forEach(data => {
        // console.log(data);
        let product = data.category_products;
        // console.log(product);
                product.forEach((product)=>{
                    // console.log(product);
                    cont.innerHTML+=`<div class="single-card">
                    <img src=${product.image} alt="" >
                    <div id="brand"> <p id="brand-title">${product.title.slice(-27) }</p> <span >${product.vendor}</span></div>
                    <div id="price"> <p>RS ${product.price}</p> <p> Rs<del>${product.compare_at_price}</del></p> <p>${parseInt(((Number(product.compare_at_price)-parseFloat(product.price))/parseFloat(product.compare_at_price))*100)}%OFF </p></div>
                    <button>Add to cart</button>
                </div>`
                })})
}
fetchData()


function displayCard(para)
{
    console.log(para);
    console.log(para.dataset.category);
    let categoryVal=para.dataset.category
    
   console.log(globalArr);

    cont.innerHTML=""


    globalArr.categories.forEach(data => {
        console.log(data);

        if(data.category_name==categoryVal)
        {
            let product = data.category_products;
            console.log(product);
                    product.forEach((product)=>{
                        // console.log(product);
                        cont.innerHTML+=`<div class="single-card">
                        <img src=${product.image} alt="" >
                        <div id="brand"> <p id="brand-title">${product.title }</p> <span >${product.vendor}</span></div>
                        <div id="price"> <p>RS ${product.price}</p> <p><del>Rs${product.compare_at_price}</del></p> <p>${parseInt(((Number(product.compare_at_price)-parseFloat(product.price))/parseFloat(product.compare_at_price))*100)}%OFF </p></div>
                        <button>Add to cart</button>
                    </div>`
                    }
                    )
        }
       }
                
                )


    // para.forEach((product)=>{
    //     console.log(product);
    //     cont.innerHTML+=`<div class="single-card" >
    //     <img src=${product.image} alt="" height="100px" width="100px">
    //     <div style="display: flex;"> <h1>${product.title }</h1> <h3>${product.vendor}</h3></div>
    //     <div style="display: flex;"> <h3>rs ${product.price}</h3> <h3 style="text-decoration: line-through;">rs${product.compare_at_price}&nbsp</h3> <h4 style="color: red;">${parseInt(((Number(product.compare_at_price)-parseFloat(product.price))/parseFloat(product.compare_at_price))*100)}%OFF&nbsp</h4></div>
    //     <button>Add to cart</button>
    // </div>`})
}