const items = [
    {
        "id": 1,
        "name" : "Stropwaffles",
        "category": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        "price" : "06&#8364; / 2300&#70;&#116;",
        "img": "img/stoopwafels.jpg",
        "quantity" : 0

    },
    {
        "id": 2,
        "name" : "Masala",
        "category": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        "price" : "12&#8364; / 4500&#70;&#116;",
        "img": "img/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg",
        "quantity" : 0
    },
    {
        "id": 3,
        "name" : "Indian food",
        "category": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        "price" : "16&#8364; / 5500&#70;&#116;",
        "img": "img/indianfood2.jpg",
        "quantity" : 0

    },
    {
        "id": 4,
        "name" : "Coxinha",
        "category": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        "price" : "10&#8364; / 4000&#70;&#116;",
        "img": "img/coxinha-brazilian-snacks.jpg",
        "quantity" : 0
    },
    {
        "id": 5,
        "name" : "Brazilian / Chinese Pastel",
        "category": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        "price" : "12&#8364; / 4500&#70;&#116;",
        "img": "img/brazilian-food-pastel2.jpg",
        "quantity" : 0

    },
    {
        "id": 6,
        "name" : "Feijoada",
        "category": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        "price" : "12&#8364; / 4500&#70;&#116;",
        "img": "img/feijoada.jpg",
        "quantity" : 0
    },
    {
        "id": 7,
        "name" : "Halal",
        "category": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        "price" : "08&#8364; / 3500&#70;&#116;",
        "img": "img/halal.jpg",
        "quantity" : 0

    },
    {
        "id": 8,
        "name" : "Masala",
        "category": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        "price" : "12&#8364; / 4500&#70;&#116;",
        "img": "img/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg",
        "quantity" : 0
    }
    
    

]

startOrder = () => {
    
    var containerProducts = document.getElementById('products');
    items.map((val) => {
        containerProducts.innerHTML += `
              
        <div class="single-menu">
            <img src="`+val.img+`">
            <div class="menu-content">
                <h4>`+val.name+  `<span>`+val.price+`</span></h4>
                <a key="`+val.id+`" href="" id="card-food">Add to cart</a>
                </br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        `;
    })
}

startOrder();

atualizarCarrinho = () => {
    var containerBasket = document.getElementById('basket');
    items.map((val) => {
        if(val.quantity > 0){
            containerBasket.innerHTML += `
        
        <p>`+val.name` | quantity: `+val.qauntity+` </p>
        `;
    }})
}

var links = document.getElementByTagName('a')
for(var i= 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let key = this.getAttribute('key');
        items[key].quantity++;
        atualizarCarrinho();
        return false;
    })
}