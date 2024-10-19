import mainImg from "../assets/images/caca_cropped.png";

const formFactory = (formId, classList, inputFields, headerTxt, submitBtnTxt, formValidation) => {

    const formatString = (s) => s.toLowerCase().trim().replace(/\s+/g, '-');

    const formDiv = document.createElement("div");
    const form = document.createElement("form");
    formDiv.classList.add("form-div");
    form.id = formId;
    form.classList.add(...classList);

    const header = document.createElement("div");
    header.classList.add("form-header")
    header.innerText = headerTxt;

    form.append(header);

    inputFields.forEach((inputF) => {

        const div = document.createElement("div");
        const label = document.createElement("label");
        const input = document.createElement(inputF.type);
        div.classList.add("input-field-div");
        label.innerText = inputF.label;
        input.id = formatString(formId + "-" + inputF.label);
        input.classList.add("input");
        input.setAttribute("name", formatString(inputF.label));
        if(inputF.inputType) input.setAttribute("type", inputF.inputType);
        label.setAttribute("for", input.id);
        if(!inputF.opt) input.setAttribute("required", "");

        div.append(input, label);
        form.append(div);
        
    });

    const btn = document.createElement("button");
    btn.innerText = submitBtnTxt;
    btn.setAttribute("form", form.id);
    btn.addEventListener("click", formValidation);

    form.append(btn);

    formDiv.append(form);
    return { 
    
        formDiv 
    
    };

}

const orderFactory = (_products) => {

    const product = (type, _name) => {

        const name = "(" + type + ") " + _name;

        let quantity = 0;

        const incQuantity = () => ++quantity;
        const decQuantity = () => quantity > 0 ? --quantity : 0;

        const getQuantity = () => quantity;

        return {

            type,
            name,
            incQuantity,
            decQuantity,
            getQuantity

        }

    }

    const products = [];
    for(const prod of _products) {
        for(let i = 1; i < prod.length; i++)
            products.push(product(prod[0], prod[i]));
    }

    const getOrder = () => products.filter((prod) => prod.getQuantity() > 0);

    const getProduct = (name) => products.find((prod) => prod.name === name);

    return {

        getOrder,
        getProduct

    }

}

export default () => {

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

    const orderNowDiv = document.createElement("div");
    const form = formFactory("order-now-form", [], [
        {label: "Name", type: "input", inputType: null, opt: false},
        {label: "Address", type: "input", inputType: null, opt: false},
        {label: "Email", type: "input", inputType: "email", opt: false},
    ], "Place your order", "Confirm", () => {}).formDiv;

    form.id = "order-now-form-div"
    
    const products = [
        ["Taco", "Al pastor", "Carne Asada", "Carnitas", "Papa con Chorizo", "Pollo Asado"],
        ["Quesadilla", "Carne Asada", "Chorizo", "Espinacas", "Pollo", "Queso"],
        ["Enchiladas", "Carne Asada", "Carnitas", "Espinacas", "Papa", "Pollo"],
        ["Tostada", "Camarones", "Carne Asada", "Cerviche", "Pollo", "Tinga"],
        ["Drinks", "Agua de Tamarindo", "Atole", "Café de Olla", "Cerveza", "Champurrado",
          "Horchata", "Jarritos", "Limonada", "Margarita", "Mezcal", "Paloma", "Sangria", "Tequila Sunrise"
        ]
    ];

    const order = orderFactory(products);

    const productsDiv = document.createElement("div");
    productsDiv.classList.add("product-div");

    for(const product of products) {
        const div = document.createElement("div");
        div.classList.add("order-product-div");
        div.append(document.createElement("button"));
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
            quantDiv.childNodes[1].innerText = "+";
            quantDiv.childNodes[2].classList.add("order-quant-btn");
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

                console.log("a");

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

    container.append(form);

    //for testing
    container.append(productsDiv);

    btn.addEventListener("click", () => {
        if(form.hasAttribute("show"))
            form.removeAttribute("show");
        else
            form.setAttribute("show", "");
    })

    content.append(container);

};