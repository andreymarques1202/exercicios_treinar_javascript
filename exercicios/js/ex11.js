const fila = ["João", "Lucia", "Maria", "Bernardo"];
let option = false;



do {

    const menu = prompt("Menu de atendimento\n1- Novo paciente\n2- Consultar paciente\n3- Sair");
    
    switch (menu) {
        case "1":
            const name = prompt("Nome do paciente a adicionar na fila de espera:")    

            fila.push(name);

            option = false;

            break;

        case "2":
            fila.length > 0 ? alert("Paciente " + fila[0] + " consultado") : alert("Não há mais pacientes para consultar");
            fila.shift();

            option = false;
            
            break;
        case "3": 
            alert("Finalizando atendimento!");
            option = true;

            break;
        default:
            alert("Opção inválida!");
            break;
    }
} while(option == false);