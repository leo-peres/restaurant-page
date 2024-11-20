export default () => {

    const div = document.createElement("div");
    div.classList.add("order-display-div");

    const orderDisplayRow = (name, quantity, price) => {

        const rowDiv = document.createElement("div");
        rowDiv.classList.add("order-display-row");
        rowDiv.innerHTML = '<div></div>'.repeat(2);

        rowDiv.childNodes[0].innerText = `${name}` + (quantity > 1 ? ` (${quantity})` : "");

        rowDiv.childNodes[1].innerText = `\$${(price*quantity).toFixed(2)}`;

        return rowDiv;

    }

    const update = (items) => {
        div.innerHTML = "";
        if(items.length == 0)
            clear();
        else {
            div.removeAttribute("empty");
            for(const item of items) {
                const newRowDiv = orderDisplayRow(item.name, item.quantity, item.price);
                div.append(newRowDiv);
            }
        }
    }

    const clear = () => {
        div.innerHTML = "";
        div.setAttribute("empty", "");
        div.innerText = ":(";
    }

    return {

        div,
        update,
        clear

    };

}