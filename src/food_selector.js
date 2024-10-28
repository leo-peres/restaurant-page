export default (products, order, expandDefault) => {

    const productsOuterBox = document.createElement("div");
    productsOuterBox.classList.add("product-outer-box");
    
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("product-div");
    productsOuterBox.append(productsDiv);


    const orderProductDivs = []
    for(const product of products) {

        const orderProductDiv = document.createElement("div");
        orderProductDiv.classList.add("order-product-div");
        orderProductDiv.append(document.createElement("button"));
        orderProductDiv.childNodes[0].setAttribute("type", "button");
        orderProductDiv.childNodes[0].classList.add("order-product-name");
        orderProductDiv.childNodes[0].innerText = product[0];

        if(expandDefault)
            orderProductDiv.setAttribute("expand", "");

        orderProductDiv.childNodes[0].addEventListener("click", (evt) => {

            if(orderProductDiv.hasAttribute("expand"))
                orderProductDiv.removeAttribute("expand");
            else
                orderProductDiv.setAttribute("expand", "");

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
            orderProductDiv.append(subProductDiv);

        }

        productsDiv.append(orderProductDiv);

    }

    const foodSelectorDialog = document.createElement("dialog");
    foodSelectorDialog.append(productsOuterBox);
    document.querySelector("body").append(foodSelectorDialog);

    return productsOuterBox;

}