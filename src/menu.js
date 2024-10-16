import taco from "../assets/images/taco.png";
import quesadilla from "../assets/images/quesadilla.png";
import enchilada from "../assets/images/enchilada.png";
import tostada from "../assets/images/tostada.png";

function MenuFood(name, price, desc) { return {name, price, desc}; }

const menuItemFactory = (name, imgPath, items, sort) => {

    if(sort)
        items.sort((x, y) => x.name < y.name ? -1 : 1);

    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");

    if(imgPath) {
        const img = document.createElement("img");
        img.classList.add("menu-photo");
        img.src = imgPath;
        img.alt = `photo of ${name.toLowerCase()}`;
        titleDiv.append(img);
    }
    else
        titleDiv.setAttribute("noimg", "");

    const title = document.createElement("div");
    title.classList.add("menu-title");
    title.innerText = name;

    titleDiv.append(title);

    const subitemsDiv = document.createElement("div");
    subitemsDiv.classList.add("subitems-div");

    items.forEach((item) => {

        const subitem = document.createElement("div");
        subitem.classList.add("menu-subitem");
        for(let i = 0; i < 4; i++)
            subitem.append(document.createElement("div"));
        subitem.childNodes[0].classList.add("subitem-name");
        subitem.childNodes[1].classList.add("subitem-sep");
        subitem.childNodes[2].innerText = `$${item.price}`;
        subitem.childNodes[2].classList.add("subitem-price");
        subitem.childNodes[3].classList.add("subitem-desc");
        subitem.childNodes[3].innerText = item.desc;
        subitemsDiv.append(subitem);

        const subitemBtn = document.createElement("button");
        subitemBtn.addEventListener("click", (evt) => {
            if(subitem.hasAttribute("desc"))
                subitem.removeAttribute("desc");
            else
                subitem.setAttribute("desc", "");
        });

        subitemBtn.innerText = item.name;
        subitem.childNodes[0].append(subitemBtn);

    });

    menuItemDiv.append(titleDiv);
    menuItemDiv.append(subitemsDiv);

    return {

        menuItemDiv

    };

}

export default () => {

    const content = document.getElementById("content");

    document.querySelector(".name-container h1").innerText = "Menu"
    document.querySelector(".name-container div").innerText = "All the best Mexican food or something";

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("menu-container");

    container.append(menuItemFactory("Taco", taco, [
        new MenuFood("Al Pastor", 10.99, "Marinated pork cooked on a vertical spit, served with pineapple, onions, and cilantro."),
        new MenuFood("Carne Asada", 10.99, "Grilled steak seasoned with lime, garlic, and spices."),
        new MenuFood("Carnitas", 10.99, "Tender, crispy pork cooked in its own fat."),
        new MenuFood("Papas con Chorizo", 10.99, "Potatoes cooked with spicy chorizo, offering a hearty, savory flavor."),
        new MenuFood("Pollo Asado", 10.99, "Grilled, marinated chicken with a smoky, citrusy flavor.")
    ]).menuItemDiv);

    container.append(menuItemFactory("Quesadilla", quesadilla, [
        new MenuFood("Carne Asada", 10.99, "Grilled steak, similar to carne asada tacos, paired with cheese."),
        new MenuFood("Chorizo", 10.99, "Spicy Mexican sausage, combined with cheese and potatoes."),
        new MenuFood("Espinacas", 10.99, "Fresh or cooked spinach with cheese."),
        new MenuFood("Pollo", 10.99, "Grilled or shredded chicken, seasoned with spices and combined with cheese."),
        new MenuFood("Queso", 10.99, "The classic quesadilla, filled with melted Oaxaca cheese.")
    ]).menuItemDiv);

    container.append(menuItemFactory("Enchiladas", enchilada, [
        new MenuFood("Carne Asada", 10.99, "Filled with grilled steak and topped with red or green salsa."),
        new MenuFood("Carnitas", 10.99, "Slow-cooked, tender pork with a smoky, savory sauce."),
        new MenuFood("Espinacas", 10.99, " Spinach-filled enchiladas, covered with red or green salsa."),
        new MenuFood("Papa", 10.99, " Potato-filled enchiladas, paired with red or green salsa."),
        new MenuFood("Pollo", 10.99, "Classic chicken enchiladas with a choice of red, green, or mole sauce.")
    ]).menuItemDiv);

    container.append(menuItemFactory("Tostada", tostada, [
        new MenuFood("Camarones", 10.99, "Shrimp with fresh avocado, lettuce, and salsa."),
        new MenuFood("Carne Asada", 10.99, "Grilled steak with avocado, lettuce, salsa, and cheese."),
        new MenuFood("Ceviche", 10.99, "Fresh fish or shrimp marinated in lime juice with tomato, cilantro, and avocado."),
        new MenuFood("Pollo", 10.99, "Topped with shredded chicken, lettuce, sour cream, and cheese."),
        new MenuFood("Tinga", 10.99, " Spicy shredded chicken cooked with chipotle and tomato sauce, topped with lettuce and crema.")
    ]).menuItemDiv);

    container.append(menuItemFactory("Drinks", "", [
        new MenuFood("Horchata", 8.99, "A sweet, creamy rice-based drink flavored with cinnamon."),
        new MenuFood("Agua de Tamarindo", 8.99, "A tangy and sweet drink made from tamarind pulp."),
        new MenuFood("Margarita", 8.99, "A classic cocktail made with tequila, lime juice, and triple sec, served on the rocks or blended with ice."),
        new MenuFood("Tequila Sunrise", 8.99, " A colorful cocktail made with tequila, orange juice, and grenadine."),
        new MenuFood("Paloma", 8.99, " A refreshing cocktail made with tequila, grapefruit soda, and lime."),
        new MenuFood("Jarritos", 8.99, "Tamarind, lime, and pineapple flavors."),
        new MenuFood("Cerveza", 8.99, "Mexican beers like Corona, Modelo, Pacifico, or Dos Equis"),
        new MenuFood("Sangria", 8.99, "A fruity red or white wine punch mixed with fruit juice and sparkling soda."),
        new MenuFood("Atole", 8.99, " A warm, thickened drink made with masa (corn dough), milk, and cinnamon, perfect for colder months."),
        new MenuFood("Champurrado", 8.99, " A chocolate version of atole, with the addition of cocoa and spices."),
        new MenuFood("Mezcal", 8.99, "A smoky distilled spirit similar to tequila served neat or in cocktails."),
        new MenuFood("Limonada", 8.99, "Fresh-squeezed limeade made with sparkling water for extra refreshment."),
        new MenuFood("Café de Olla", 8.99, "Traditional Mexican coffee brewed with cinnamon and piloncillo (unrefined cane sugar) and served in clay pots.")
    ], true).menuItemDiv);

    content.append(container);

}