import mainImg from "../assets/images/caca_cropped.png";
import orderFactory from "./order.js";
import orderManagerFactory from "./order_manager.js";
import addressFormFactory from "./address_form.js";
import foodSelectorFactory from "./food_selector.js";

export default () => {

    const formatString = (s) => s.toLowerCase().trim().replace(/\s+/g, '-');

    const restaurantName = "El Perro Caca"

    const content = document.getElementById("content");

    document.querySelector(".name-container h1").innerText = restaurantName;
    document.querySelector(".name-container div").innerText = "Mexican food";

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("home-container");

    let img = document.createElement("img");
    img.src = mainImg;
    img.alt = "Friendly neighborhood dog";

    let txtDiv = document.createElement("div");
    txtDiv.classList.add("txt-div");
    txtDiv.classList.add("btn-div");

    let txt = document.createElement("p");
    txt.innerText = "Get the best selection of tacos, quesadillas and more. Check our menu for more detailed descriptions."

    let btn = document.createElement("button");
    btn.innerText = "Menu"
    btn.id = "menu-btn";

    txtDiv.append(txt);
    txtDiv.append(btn);

    container.append(img);
    container.append(txtDiv);

    let map = document.createElement("iframe");
    container.append(map);
    map.outerHTML = '<iframe class="location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2841.1895477024723!2d-116.39742143222922!3d36.64286353148558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1728908776329!5m2!1sen!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    txtDiv = document.createElement("div");
    txtDiv.classList.add("txt-div");

    txt = document.createElement("p");
    txt.innerText = "See how easy it is to find us."

    txtDiv.append(txt);
    container.append(txtDiv);

    txtDiv = document.createElement("div");
    txtDiv.classList.add("txt-div");

    txt = document.createElement("p");
    txt.innerText = "Don't waste any time and get your food delivered at your location right now!"

    txtDiv.append(txt);
    container.append(txtDiv);

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btn-div");

    btn = document.createElement("button");
    btn.innerText = "Order now!!!";
    btn.id = "order-now";

    btnDiv.append(btn);
    container.append(btnDiv);

    const products = [
        ["Taco", "Al pastor", "Carne Asada", "Carnitas", "Papa con Chorizo", "Pollo Asado"],
        ["Quesadilla", "Carne Asada", "Chorizo", "Espinacas", "Pollo", "Queso"],
        ["Enchilada", "Carne Asada", "Carnitas", "Espinacas", "Papa", "Pollo"],
        ["Tostada", "Camarones", "Carne Asada", "Cerviche", "Pollo", "Tinga"],
        ["Drinks", "Agua de Tamarindo", "Atole", "Café de Olla", "Cerveza", "Champurrado",
          "Horchata", "Jarritos", "Limonada", "Margarita", "Mezcal", "Paloma", "Sangria", "Tequila Sunrise"
        ]
    ];

    const order = orderFactory(products);
    const orderManager = orderManagerFactory(products);

    //////////// ADDRESS FORM ////////////

    const addressForm = addressFormFactory();

    const addressFormDialog = document.createElement("dialog");
    addressFormDialog.append(addressForm.addressFormDiv);
    document.querySelector("body").append(addressFormDialog);

    //////////////// ORDER NOW ////////////////

    const orderNowDiv = document.createElement("div");
    orderNowDiv.classList.add("order-now");

    //////////// FOOD SELECTOR DIV ////////////

    const foodSelectorDiv = document.createElement("div");
    foodSelectorDiv.classList.add("order-selector-div");
    foodSelectorDiv.innerHTML = '<button type="button">Select your products</button>'

    foodSelectorDiv.childNodes[0].addEventListener("click", () => {foodSelectorDialog.showModal()});

    const mainPageFoodSelector = foodSelectorFactory(products, orderManager, false);

    mainPageFoodSelector.classList.add("order-now-div");
    mainPageFoodSelector.classList.add("product-picker");
    foodSelectorDiv.append(mainPageFoodSelector);

    const dialogFoodSelector = foodSelectorFactory(products, orderManager, true);

    const foodSelectorDialog = document.createElement("dialog");
    foodSelectorDialog.append(dialogFoodSelector);
    document.querySelector("body").append(foodSelectorDialog);

    orderNowDiv.append(foodSelectorDiv);

    //////////// ADDRESS DIV ////////////

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("order-address-div");

    //NO ADDRESS STATE

    addressDiv.setAttribute("no-address", "");
    addressDiv.innerHTML = '<div>Oh no! It appears that we have no way to find you. Why don\'t you change that by clicking the button bellow.</div><button type="button">Add your address</button>';

    addressDiv.childNodes[1].addEventListener("click", () => {addressFormDialog.showModal()});

    const updateAddress = () => {

        addressDiv.innerHTML = '<div></div><div></div><button type"button">Change address</button>';
        addressDiv.removeAttribute("no-address");
        addressDiv.setAttribute("address", "");

        addressDiv.childNodes[0].classList.add("order-address-greetings");
        addressDiv.childNodes[1].classList.add("order-address-container");
        
        addressDiv.childNodes[0].innerText = `Hello, ${order.getClientName()}!`;
        addressDiv.childNodes[1].innerHTML = "<div>Your food will be delivered at</div>" +
                                            `<div>${order.getClientAddress()}</div>`;

        addressDiv.childNodes[2].addEventListener("click", () => {addressFormDialog.showModal()}); 

    }

    addressForm.addConfirmBtnEvent(() => {
        
        const [name, address, email, phone] = addressForm.getValues();
        order.addClientInfo(name, address, email, phone, {});

        updateAddress();

        addressFormDialog.close();

    });

    orderNowDiv.append(addressDiv);

    //////////// ORDER VIEW ////////////

    const orderViewDiv = document.createElement("div");
    orderViewDiv.classList.add("order-view-div");

    orderViewDiv.innerText = ":(";

    orderNowDiv.append(orderViewDiv);

    //////////// BUTTONS //////////// 

    const orderBtnDiv = document.createElement("div");
    orderBtnDiv.classList.add("order-btn-div");

    const orderPriceDisplayDiv = document.createElement("div");
    orderPriceDisplayDiv.classList.add("order-price-display-div");
    orderPriceDisplayDiv.innerHTML = '<div>' +
                                       '<div>Total price</div>' +
                                       '<div>$0,00</div>' +
                                     '</div>';

    orderBtnDiv.append(orderPriceDisplayDiv);

    const orderBtnContainer = document.createElement("div");
    orderBtnContainer.innerHTML = "<button></button><button></button>";
    orderBtnContainer.childNodes[0].innerText = "Clear order";
    orderBtnContainer.childNodes[0].setAttribute("type", "button");
    orderBtnContainer.childNodes[1].innerText = "Submit order";
    orderBtnContainer.childNodes[1].setAttribute("type", "button");

    orderBtnDiv.append(orderBtnContainer);

    orderNowDiv.append(orderBtnDiv);

    //////////////////////// 

    container.append(orderNowDiv);

    btn.addEventListener("click", () => {
        if(orderNowDiv.hasAttribute("show"))
            orderNowDiv.removeAttribute("show");
        else
            orderNowDiv.setAttribute("show", "");
    })

    content.append(container);

};