const foodList = document.querySelector('.menu');


function eventListener() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });
}


//load food items content from JSON file

function loadJSON() {
    fetch('food.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(food => {
            html += `
            <div class="single-menu">
            <img src="${food.img}">
            <div class="menu-content">
                <h4>${food.name}<span>${food.price}</span></h4>
                <p>${food.category}</p>
            </div>
            <button type="button" class="add-to-cart-btn" >
            <i class= "fas fa-shopping-cart"> </i>Add to Cart
            <button> 
        </div>
            `;
        });
        foodList.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. 
        // need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}