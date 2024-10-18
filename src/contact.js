const formFactory = (formId, classList, inputFields, headerTxt, submitBtnTxt, formValidation) => {

    const formatString = (s) => s.toLowerCase().trim().replace(/\s+/g, '-');

    const formDiv = document.createElement("div");
    const form = document.createElement("form");
    formDiv.classList.add("form-div");
    form.id = formId;
    form.classList.add(...classList);

    const header = document.createElement("div");
    header.classList.add("form-header")
    header.innerText = headerTxt;

    form.append(header);

    inputFields.forEach((inputF) => {

        const div = document.createElement("div");
        const label = document.createElement("label");
        const input = document.createElement(inputF.type);
        div.classList.add("input-field-div");
        label.innerText = inputF.label;
        input.id = formatString(formId + "-" + inputF.label);
        input.classList.add("input");
        input.setAttribute("name", formatString(inputF.label));
        if(inputF.inputType) input.setAttribute("type", inputF.inputType);
        label.setAttribute("for", input.id);
        if(!inputF.opt) input.setAttribute("required", "");

        div.append(input, label);
        form.append(div);
        
    });

    const btn = document.createElement("button");
    btn.innerText = submitBtnTxt;
    btn.setAttribute("form", form.id);
    btn.addEventListener("click", formValidation);

    form.append(btn);

    formDiv.append(form);
    return { 
    
        formDiv 
    
    };

}

export default () => {
    
    const content = document.getElementById("content");

    document.querySelector(".name-container h1").innerText = "Contact";
    document.querySelector(".name-container div").innerText = "Tell us how good we are right here";

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("contact-container");

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("contact-div");

    for(let i = 0; i < 3; i++)
        addressDiv.append(document.createElement("div"));

    addressDiv.childNodes[0].innerHTML = "<div>Address</div> <div> 123 12th Street </div> <div>Oakland Park, FL, 33306</div>"
    addressDiv.childNodes[1].innerHTML = "<div>Phone</div> <div>(2) 8258-9933</div>";
    addressDiv.childNodes[2].innerHTML = "<div>Email</div> <div>perro@caca.com</div>";

    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("contact-div");

    hoursDiv.append(document.createElement("div"));
    hoursDiv.childNodes[0].innerHTML = "<div>Open all days of the week</div><div>10:00AM - 10:00PM</div>";

    const form = formFactory("contact-form", [], [
        {label: "Name", type: "input", inputType: null, opt: false},
        {label: "Email", type: "input", inputType: "email", opt: false},
        {label: "Your message", type: "textarea", inputType: null, opt: false}
    ],"Send us a message", "Send", () => {
        document.getElementById("contact-form").setAttribute("show-invalid", "");
    }).formDiv;

    form.classList.add("contact-card");

    container.append(addressDiv);
    container.append(hoursDiv);
    container.append(form);

    content.append(container);

}