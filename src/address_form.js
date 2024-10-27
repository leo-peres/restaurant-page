export default () => {

    const formatString = (s) => s.toLowerCase().trim().replace(/\s+/g, '-');

    let addressFormDiv = document.createElement("div");
    addressFormDiv.classList.add("form-div");
    addressFormDiv.classList.add("address-form-container");

    const addressForm = document.createElement("form");
    addressForm.id = "main-page-address-form";
    addressForm.innerHTML = '<div></div>' + '<div class="address-form-div"></div>'.repeat(4) + '<button></button>';
    addressFormDiv.append(addressForm);
    
    addressForm.childNodes[0].innerHTML = "<h2>Contact info</h2>";
    addressForm.childNodes[0].classList.add("form-header");

    const inputFieldNames = ["First name", "Last name", "Address", "Adress 2", "City", "State", "Postal code", "Email", "Phone number"];
    const inputFieldKeys = ["firstName", "lastName", "address", "address2", "city", "state", "postalCode", "email", "phone"];

    const inputDivs = []
    const inputFields = {};
    for(let i = 0; i < inputFieldNames.length; i++) {
        const inputName = inputFieldNames[i]
        const inputId = formatString(inputName);
        const inputDiv = document.createElement("div");
        inputDiv.innerHTML = `<label for="order-${inputId}">${inputName}</label><input id="order-${inputId}" class="input">`;
        inputDiv.classList.add("input-field-div");
        inputDiv.classList.add("form-address-input-field-div");
        inputDivs.push(inputDiv);
        inputFields[inputFieldKeys[i]] = inputDiv.childNodes[1];
    }

    addressForm.childNodes[1].append(inputDivs[0], inputDivs[1]);
    addressForm.childNodes[2].append(inputDivs[2], inputDivs[3], inputDivs[4], inputDivs[5], inputDivs[6]);
    addressForm.childNodes[3].append(inputDivs[7], inputDivs[8]);

    addressForm.childNodes[4].classList.add("address-form-radio-btn-div");

    const forWhoOrderDiv = document.createElement("div");
    forWhoOrderDiv.classList.add("order-radio-btn-div");
    forWhoOrderDiv.innerHTML = "<h3>Who is this order for?</h3><div></div>";
    forWhoOrderDiv.childNodes[1].innerHTML = '<div>' +
                                                '<input type="radio" id="radio-btn-myself" name="for-who-radio-btn">' +
                                                '<label for="radio-btn-myself">Myself</label>'+
                                              '</div>' +
                                              '<div>' +
                                                '<input type="radio" id="radio-btn-eses" name="for-who-radio-btn">' +
                                                '<label for="radio-btn-eses">My eses</label>' +
                                              '</div>';

    const deliveryTypeDiv = document.createElement("div");
    deliveryTypeDiv.classList.add("order-radio-btn-div");
    deliveryTypeDiv.innerHTML = "<h3>Pick up option</h3><div></div>";
    deliveryTypeDiv.childNodes[1].innerHTML = '<div>' +
                                                '<input type="radio" id="radio-btn-home" name="delivery-type-radio-btn">' +
                                                '<label for="radio-btn-home">Deliver at my address</label>'+
                                              '</div>' +
                                              '<div>' +
                                                '<input type="radio" id="radio-btn-store" name="delivery-type-radio-btn">' +
                                                '<label for="radio-btn-store">I\'ll pick up at the store</label>' +
                                              '</div>';

    addressForm.childNodes[4].append(forWhoOrderDiv, deliveryTypeDiv);

    const confirmBtn = addressForm.childNodes[5];
    confirmBtn.innerText = "Confirm";
    confirmBtn.setAttribute("type", "button");

    const getValues = () => {

        const name = {
            firstName: inputFields.firstName.value,
            lastName: inputFields.lastName.value
        }

        const address = {
            address: inputFields.address.value,
            address2: inputFields.address2.value,
            city: inputFields.city.value,
            state: inputFields.state.value,
            postalCode: inputFields.postalCode.value
        }

        const email = inputFields.email.value;
        const phone = inputFields.phone.value;

        return [name, address, email, phone]

    }

    const addConfirmBtnEvent = (evtListener) => {confirmBtn.addEventListener("click", evtListener)};

    return {

        addressFormDiv,
        getValues,
        addConfirmBtnEvent

    };

}