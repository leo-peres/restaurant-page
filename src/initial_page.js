import mainImg from "../assets/images/caca_cropped.png";

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

    content.append(container);

};