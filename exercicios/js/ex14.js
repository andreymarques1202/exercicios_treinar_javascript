const vagas = [
    {vaga: "Desenvolvedor frontend", candidatos: 5, descricao: "Desenvolver aplicações web voltado para o client", limite: "um mês"},
    {vaga: "Desenvolvedor backend", candidatos: 2, descricao: "Desenvolver sistemas com integração de pagamentos", limite: "10 dia"},
    {vaga: "Estagiario", candidatos: 4, descricao: "Auxiliar no desenvolvimento de aplicações e sistemas", limite: "7 dias"}
];

const candidatos = [
    [
        {frontend:
            [
                {nome: "João mendes"},
                {nome: "Jefferson rodrigues"},
                {nome: "Mario silva"}
            ]
        } 
    ],
    [
        {backend:
            [
                {nome: "Maicon souza"},
                {nome: "Miguel sanches"}
            ]
        }
    ],
    [
        {estagiario: 
            [
                {nome: "Rodrigo soares"},
                {nome: "Felipe ramos"}, 
                {nome: "Thomas simoes"},
                {nome: "Peterson silva"}
            ]
        }
    ]
];

let exit = true;

do {
    const menu = prompt("Menu de Busca emprego ou colaboradores\n1- Listar vagas disponíveis\n2- Criar uma nova vaga\n3- Visualizar uma vaga\n4- Inscrever em uma vaga\n5- Excluir vaga\n6- Sair");


    switch(menu) {
        case "1": 
            vagas.forEach(element => {
               console.log("Vaga disponivel: " + element.vaga); 
            });
            
            const candidatosIncritos = vagas.reduce(function (valor, cadidato) {
                return valor + cadidato.candidatos;
            }, 0);

            console.log("Cadidatos totais das vagas: " + candidatosIncritos);
            exit = false;
        break;
        case "2": 
            const nomeVaga = prompt("Nome da vaga: ");
            const descricaoVaga = prompt("Descrição da vaga: ");
            const dataLimite = prompt("Data limite de inscrição: ");
            const confirm = confirm("Você deseja criar a vaga?");

            if(confirm === true) {
                vagas.push({nome: nomeVaga, descricao: descricaoVaga, data: dataLimite});
            } else {
                console.log("Cancelando criação da vaga...");
            }
            exit = false;
        break;
        case "3": 
            const nome = prompt("Nome do canditado: ");
            const indice = parseInt("Digite o indice da vaga: ");
            vagas.forEach((element, indice) => {
                 
             });
    }

} while(exit === false);
