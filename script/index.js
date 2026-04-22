// document.getElementById("cart-btn-steel").addEventListener('click', function () {
//     alert("cart-btn-steel");
// })
// function removeSpace(str) {
//     return str.replaceAll(" ","").toUpperCase()
// }

// const titles = document.querySelectorAll('.card-title')
// console.log(titles)

// for (const title of titles) {
    
// }

function getElement(id) {
    const element = document.getElementById(id)
    return element
}

const cartBtns = document.getElementsByClassName('cart-btn')
for (const cartButton of cartBtns) {
    cartButton.addEventListener("click", function () {
        const productImg = cartButton.parentNode.parentNode.children[0].children[0].src
        
        const productTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText
        // console.log(productTitle)

        const productPrice = cartButton.parentNode.parentNode.children[1].children[2].children[0].innerText
        
        const totalPrice = getElement("total-price").innerText;
        
        const currentTotal = Number(productPrice) + Number(totalPrice)
        getElement("total-price").innerText = currentTotal



        // quantity 
        const Quantity = getElement("total-quantity").parentNode.parentNode.children[1].innerText;
        
        let totalQuantity = getElement("total-quantity").innerText

        totalQuantity++;
        
        getElement("total-quantity").innerText=totalQuantity


        
        const cartContainer = getElement('cart-container')
        
        const newCart = document.createElement('div')
        newCart.innerHTML = `
        <div class=" bg-gray-200 rounded-xl flex justify-between lg:p-4 w-full p-1">
                   <img class="w-10" src="${productImg}" alt="">
                  <div class="">
                       <h2 class="font-bold">${productTitle}</h2>
                      <h2 class="font-bold">${productPrice} TK</h2> 
                  </div>
                 </div>
        
        `;
        cartContainer.appendChild(newCart)
    })
}



// boro code
// document.getElementById("cart-btn-1").addEventListener('click', function () {
//     const title = getElement("card-title-1").innerText
//     const price = getElement("card-price-1").innerText;
    
//     // total price
//     const totalPrice = getElement("total-price").innerText
   
//     // calculate
//     currentTotal=Number(price) + Number(totalPrice)
    

//     // price update
//     getElement("total-price").innerText = currentTotal.toFixed(2)

//     // card container
//     const cartContainer = getElement("cart-container");
    
//     const newCart = document.createElement('div')
//     newCart.innerHTML = `
//     <div class=" bg-gray-200 rounded-xl flex justify-between  p-4">
//                   <img class="w-10" src="./assets/kitchen-1.png" alt="">
//                   <div class="">
//                       <h2 class="font-bold">${title}</h2>
//                       <h2 class="font-bold">${price} TK</h2>
                      
//                   </div>
//                 </div>
    
//     `;
//     cartContainer.appendChild(newCart)
// })