import mainImg from "../assets/images/caca_cropped.png";
import orderFactory from "./order.js"

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

    //////////// ADDRESS FORM ////////////

    let addressFormDiv = document.createElement("div");
    addressFormDiv.classList.add("form-div");
    addressFormDiv.classList.add("address-form-container");

    const addressForm = document.createElement("form");
    addressForm.id = "main-page-address-form";
    addressForm.innerHTML = '<div></div>' + '<div class="address-form-div"></div>'.repeat(4) + '<button></button>';
    addressFormDiv.append(addressForm);
    
    addressForm.childNodes[0].innerHTML = "<h2>Contact info</h2>";
    addressForm.childNodes[0].classList.add("form-header");

    const inputFieldNames = ["First name", "Last name", "Address", "Adress 2", "City", "State", "Postal code", "Email", "Phone number"];

    const inputFields = [];
    for(let i = 0; i < inputFieldNames.length; i++) {
        const inputName = inputFieldNames[i]
        const inputId = formatString(inputName);
        const inputDiv = document.createElement("div");
        inputDiv.innerHTML = `<label for="order-${inputId}">${inputName}</label><input id="order-${inputId}" class="input">`;
        inputDiv.classList.add("input-field-div");
        inputDiv.classList.add("form-address-input-field-div");
        inputFields.push(inputDiv);
    }

    addressForm.childNodes[1].append(inputFields[0], inputFields[1]);
    addressForm.childNodes[2].append(inputFields[2], inputFields[3], inputFields[4], inputFields[5], inputFields[6]);
    addressForm.childNodes[3].append(inputFields[7], inputFields[8]);

    addressForm.childNodes[4].classList.add("address-form-radio-btn-div");

    const forWhoOrderDiv = document.createElement("div");
    forWhoOrderDiv.classList.add("order-radio-btn-div");
    forWhoOrderDiv.innerHTML = "<h3>Who is this order for?</h3><div></div>";
    forWhoOrderDiv.childNodes[1].innerHTML = '<div>' +
                                                '<input type="radio" id="radio-btn-myself" name="for-who-radio-btn">' +
                                                '<label for="radio-btn-myself">Myself</label>'+
                                              '</div>' +
                                              '<div>' +
                                                '<input type="radio" id="radio-btn-eses" name="for-who-radio-btn">' +
                                                '<label for="radio-btn-eses">My eses</label>' +
                                              '</div>';

    const deliveryTypeDiv = document.createElement("div");
    deliveryTypeDiv.classList.add("order-radio-btn-div");
    deliveryTypeDiv.innerHTML = "<h3>Pick up option</h3><div></div>";
    deliveryTypeDiv.childNodes[1].innerHTML = '<div>' +
                                                '<input type="radio" id="radio-btn-home" name="delivery-type-radio-btn">' +
                                                '<label for="radio-btn-home">Deliver at my address</label>'+
                                              '</div>' +
                                              '<div>' +
                                                '<input type="radio" id="radio-btn-store" name="delivery-type-radio-btn">' +
                                                '<label for="radio-btn-store">I\'ll pick up at the store</label>' +
                                              '</div>';

    addressForm.childNodes[4].append(forWhoOrderDiv, deliveryTypeDiv);

    addressForm.childNodes[5].innerText = "Confirm";
    //addressForm.childNodes[5].classList.add("address-form-btn-div");

    

    const addressFormDialog = document.createElement("dialog");
    addressFormDialog.append(addressFormDiv);
    document.querySelector("body").append(addressFormDialog);
    //content.append(addressFormDiv); //FOR TESTING

    //////////// FOOD SELECTOR FORM ////////////

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

    const productsOuterBox = document.createElement("div");
    productsOuterBox.classList.add("product-outer-box");
    
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("product-div");
    productsOuterBox.append(productsDiv);


    for(const product of products) {

        const div = document.createElement("div");
        div.classList.add("order-product-div");
        div.append(document.createElement("button"));
        div.childNodes[0].setAttribute("type", "button");
        div.childNodes[0].classList.add("order-product-name");
        div.childNodes[0].innerText = product[0];

        div.childNodes[0].addEventListener("click", (evt) => {

            if(div.hasAttribute("expand"))
                div.removeAttribute("expand");
            else
                div.setAttribute("expand", "");

        });

        for(let i = 1; i < product.length; i++) {

            const subProductDiv = document.createElement("div");
            subProductDiv.classList.add("order-subproduct-div");
            subProductDiv.append(document.createElement("div"));
            subProductDiv.childNodes[0].classList.add("order-subproduct");
            subProductDiv.childNodes[0].innerText = product[i];

            const quantDiv = document.createElement("div");
            quantDiv.classList.add("order-quant-div");
            quantDiv.append(document.createElement("div"))
            quantDiv.append(document.createElement("button"));
            quantDiv.append(document.createElement("button"));
            quantDiv.childNodes[0].classList.add("order-quant");
            quantDiv.childNodes[0].innerText = "0";
            quantDiv.childNodes[1].classList.add("order-quant-btn");
            quantDiv.childNodes[1].setAttribute("type", "button");
            quantDiv.childNodes[1].innerText = "+";
            quantDiv.childNodes[2].classList.add("order-quant-btn");
            quantDiv.childNodes[2].setAttribute("type", "button");
            quantDiv.childNodes[2].innerText = "-";

            const changeQuantity = (name, x) => {
                const prod = order.getProduct(name);
                if(x > 0)
                    prod.incQuantity();
                else if(x < 0)
                    prod.decQuantity();
                return prod.getQuantity();
            }

            const increase = (evt) => {

                const name = "(" + product[0] +") " + product[i];
                let quantity = changeQuantity(name, 1);
                quantDiv.childNodes[0].innerText = quantity;

            }

            const decrease = (evt) => {

                const name = "(" + product[0] +") " + product[i];
                let quantity = changeQuantity(name, -1);
                quantDiv.childNodes[0].innerText = quantity;

            }

            quantDiv.childNodes[1].addEventListener("click", increase);
            quantDiv.childNodes[2].addEventListener("click", decrease);

            subProductDiv.append(quantDiv);
            div.append(subProductDiv);

        }

        productsDiv.append(div);

    }

    /*
    orderNowDiv.childNodes[1].append(productsOuterBox);
    orderNowDiv.childNodes[1].classList.add("order-now-div");
    orderNowDiv.childNodes[1].classList.add("product-picker");
    */

    const foodSelectorDialog = document.createElement("dialog");
    foodSelectorDialog.append(productsOuterBox);
    document.querySelector("body").append(foodSelectorDialog);

    //content.append(productsOuterBox);

    //////////////// ORDER NOW ////////////////

    const orderNowDiv = document.createElement("div");
    orderNowDiv.classList.add("order-now");
    //orderNowDiv.innerHTML = "<div></div>".repeat(4);

    //////////// FOOD SELECTOR DIV ////////////

    const foodSelectorDiv = document.createElement("div");
    foodSelectorDiv.classList.add("order-selector-div");
    foodSelectorDiv.innerHTML = '<button type="button">Select your products</button>'

    foodSelectorDiv.childNodes[0].addEventListener("click", () => {foodSelectorDialog.showModal()});
    
    foodSelectorDiv.append(productsOuterBox);

    orderNowDiv.append(foodSelectorDiv);

    //////////// ADDRESS DIV ////////////

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("order-address-div");

    //NO ADDRESS STATE

    addressDiv.setAttribute("no-address", "");
    addressDiv.innerHTML = '<div>Oh no! It appears that we have no way to find you. Why don\'t you change that by clicking the button bellow.</div><button type="button">Add your address</button>';

    addressDiv.childNodes[1].addEventListener("click", () => {addressFormDialog.showModal()});

    //WITH ADDRESS STATE

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