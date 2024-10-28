export default (_products) => {

    const clientInfo = (() => {

        let valid = true;

        const name = {firstName: "Joe", lastName: "Table"};
        const address = {
                         address: "123, 45th Street",
                         address2: "apartment 12",
                         city: "Oakland Park",
                         state: "FL",
                         postalCode: "12345"
                        };
        let email = "joetable@gmail.com";
        let phone = "(2) 13627-9841";
        const delivery = {forWho: "Myself", type: "AtHome"}

        const getName = () => `${name.firstName} ${name.lastName}`;

        const getAddress = () => `${address.address}, ${address.address2}<br>` +
                                   `${address.city}, ${address.state}<br>` +
                                   `${address.postalCode}`;

        return {

            valid,
            name,
            address,
            email,
            phone,
            delivery,
            getName,
            getAddress

        };

    })();

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

    const getProducts = () => products;

    const getOrder = () => products.filter((prod) => prod.getQuantity() > 0);

    const getProduct = (name) => products.find((prod) => prod.name === name);

    const addClientInfo = (name, address, email, phone, delivery) => {

        Object.assign(clientInfo.name, name);
        Object.assign(clientInfo.address, address);
        clientInfo.email = email;
        clientInfo.phone = phone;
        Object.assign(clientInfo.delivery, delivery);

        clientInfo.valid = true;

    }

    const hasAddress = () => address.valid;
    const getClientName = () => clientInfo.getName();
    const getClientAddress = () => clientInfo.getAddress();

    return {

        getProducts,
        getOrder,
        getProduct,
        addClientInfo,
        hasAddress,
        getClientName,
        getClientAddress

    }

}