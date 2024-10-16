import "./style.css";
import initialPage from "./initial_page.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

let currentPage = "home";

initialPage();

function changePage(evt) {

    let id = evt.target.id.slice(0, 4);    
    if(!(id === currentPage)) {

        const content = document.getElementById("content");
        content.innerHTML = "";

        switch(id) {
            case "home":
                initialPage();
                document.getElementById("menu-btn").addEventListener("click", changePage);
                currentPage = "home";
                break;
            case "menu":
                menuPage();
                currentPage = "menu";
                break;
            case "cont":
                contactPage();
                currentPage = "cont";
        }
    }
}

document.querySelectorAll(".header-nav, #menu-btn").forEach((e) => {e.addEventListener("click", changePage)});