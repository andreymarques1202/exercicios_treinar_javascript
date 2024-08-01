
const contacts = [];

function addContact() {
    const list = document.getElementById("contacts-list");
    const contactName = prompt("Informe o nome do contato:");
    const contactDDD = prompt("Informe o ddd:");
    const contact = prompt("Informe o Número:");

    const contactNumber = "(" + contactDDD + ") " + contact;
    

    contacts.push({name: contactName, contact: contactNumber});
    
    if(contacts.length > 0) {
        const names = contacts.map(element => {
            return element.name;
        });
        
        const numbers = contacts.map(element => {
            return element.contact;
        })
    
        for(let namesI = 0; namesI < names.length; namesI++) {
            const name = document.createElement("p");
            name.textContent = "Contato: " + names[namesI];
            list.appendChild(name);
            document.body.appendChild(list); 
        }        
    
        for(let i = 0; i < numbers.length; i++) {
            const number = document.createElement("p");
            number.textContent = "Numero: " + numbers[i];
            list.appendChild(number);
            document.body.appendChild(list);
        }
    }

    console.log(list);
}

function removeContact() {
    const list = document.getElementById("contacts-list");
    contacts.pop();

    for(child of list.children) {
        child.remove();
    }
}

