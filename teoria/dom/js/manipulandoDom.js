
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
    
                const div = document.createElement("div");
                const name = document.createElement("p");
                name.textContent = "Contato: " + names[names.length -1];
                const number = document.createElement("p");
                number.textContent = "Numero: " + numbers[numbers.length - 1];
                
                div.appendChild(name);
                div.appendChild(number);
                list.appendChild(div);
                document.body.appendChild(list); 
        
    
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

