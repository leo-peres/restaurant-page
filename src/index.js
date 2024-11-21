import "./style.css";
import initialPage from "./initial_page.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

let currentPage = "home";

function changePage(evt) {

    console.log("a");

    let id = evt.target.id.slice(0, 4);    
    if(!(id === currentPage)) {

        const content = document.getElementById("content");
        content.innerHTML = "";

        switch(id) {
            case "home":
                initialPage();
                //document.getElementById("menu-btn").addEventListener("click", changePage);
                addMenuBtnEvent();
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

document.querySelectorAll(".header-nav").forEach((e) => {e.addEventListener("click", changePage)});

const addMenuBtnEvent = () => {
    
    document.getElementById("menu-btn").addEventListener("click", () => {
    
    const content = document.getElementById("content");
    content.innerHTML = "";

    menuPage();
    currentPage = "menu";

    window.scrollTo({top: 0});

    });

}

initialPage();
addMenuBtnEvent();