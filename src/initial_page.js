import cacaImg from "../assets/images/caca_cropped.png";

export default () => {

    let content = document.getElementById("content");

    let header = document.createElement("h1");
    header.innerText = "El Perro Caca";

    let desc = document.createElement("p");
    desc.innerText = "Mexican food."

    let img = document.createElement("img");
    img.src = cacaImg;
    img.alt = "Friendly neighborhood dog"

    content.appendChild(header);
    content.appendChild(desc);
    content.appendChild(img);

};