const foodSelectorInterface = () => {

    const outerBox = document.createElement("div");
    outerBox.classList.add("product-outer-box");
    
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("product-div");
    outerBox.append(productsDiv);

    const addProduct = (name, expandDefault) => {

        const newProductDiv = document.createElement("div");
        newProductDiv.classList.add("order-product-div");
        newProductDiv.append(document.createElement("button"));
        newProductDiv.childNodes[0].setAttribute("type", "button");
        newProductDiv.childNodes[0].classList.add("order-product-name");
        newProductDiv.childNodes[0].innerText = name;

        const subProductList = document.createElement("ul");
        subProductList.classList.add("sub-product-list");

        if(expandDefault) {
            newProductDiv.setAttribute("expand", "");
            newProductDiv.append(subProductList);
        }

        productsDiv.append(newProductDiv);

        const addOnClick = (newOnClick) => {
            newProductDiv.childNodes[0].addEventListener("click", newOnClick);
        }

        const isExpanded = () => newProductDiv.hasAttribute("expand");

        const toggleExpand = () => {
            if(isExpanded()) {
                newProductDiv.removeAttribute("expand");
                clear();
            }
            else {
                newProductDiv.setAttribute("expand", "");
                newProductDiv.append(subProductList);
            }
        }

        const clear = () => {newProductDiv.removeChild(subProductList);}

        const addSubProduct = (type, name, quantity, incQuantity, decQuantity) => {

            const newSubProductDiv = document.createElement("div");
            newSubProductDiv.classList.add("order-subproduct-div");
            newSubProductDiv.append(document.createElement("div"));
            newSubProductDiv.childNodes[0].classList.add("order-subproduct");
            newSubProductDiv.childNodes[0].innerText = name;

            const quantDiv = document.createElement("div");
            quantDiv.classList.add("order-quant-div");

            const quantityDisplay = document.createElement("div");
            quantityDisplay.classList.add("order-quant");
            quantityDisplay.innerText = quantity;

            const increaseBtn = document.createElement("button");
            const decreaseBtn = document.createElement("button");

            const id = `(${type}) ${name}`;

            increaseBtn.classList.add("order-quant-btn");
            increaseBtn.setAttribute("type", "button");
            increaseBtn.innerText = '+';
            increaseBtn.addEventListener("click", () => {incQuantity(id);});

            decreaseBtn.classList.add("order-quant-btn");
            decreaseBtn.setAttribute("type", "button");
            decreaseBtn.innerText = '-';
            decreaseBtn.addEventListener("click", () => {decQuantity(id);});

            quantDiv.append(quantityDisplay);
            quantDiv.append(increaseBtn);
            quantDiv.append(decreaseBtn);

            newSubProductDiv.append(quantDiv);

            subProductList.append(newSubProductDiv);

            //const increaseBtnAddOnClick = (onClickFunction) => {increaseBtn.addEventListener("click", onClickFunction)}
            //const decreaseBtnAddOnClick = (onClickFunction) => {decreaseBtn.addEventListener("click", onClickFunction)}

            const setQuantity = (quantity) => {quantityDisplay.innerText = quantity;};

            return {
                id,
                setQuantity
            };

        }

        return {

            addOnClick,
            isExpanded,
            toggleExpand,
            addSubProduct,
            clear

        };

    };

    return {

        outerBox,
        addProduct

    };

}

export default (products, orderManager, expandDefault) => {

    const fsInterface = foodSelectorInterface();

    for(const item of orderManager.orderItems) {

        const newProd = fsInterface.addProduct(item.name, expandDefault);

        for(const subItem of item.subItems) {
            const newSubProd = newProd.addSubProduct(item.name, subItem.name, subItem.getQuantity(), orderManager.addToOrder, orderManager.removeFromOrder);
            orderManager.addQuantityDisplay({source: subItem.getQuantity, display: newSubProd.setQuantity});
        }

        newProd.addOnClick(() => {
            newProd.toggleExpand();
        });

    }

    return fsInterface.outerBox;

}