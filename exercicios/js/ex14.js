const vagas = [
    {nomeVaga: "Desenvolvedor frontend", candidatos: 5, descricaoVaga: "Desenvolver aplicações web voltado para o client", limite: "um mês"},
    {nomeVaga: "Desenvolvedor backend", candidatos: 2, descricaoVaga: "Desenvolver sistemas com integração de pagamentos", limite: "10 dia"},
    {nomeVaga: "Estagiario", candidatos: 4, descricaoVaga: "Auxiliar no desenvolvimento de aplicações e sistemas", limite: "7 dias"}
];

const candidatos = [
    {
        vaga: "Desenvolvedor frontend",
        candidatos: [
            {nome: "João mendes"},
            {nome: "Jefferson rodrigues"},
            {nome: "Mario silva"}
        ]
    },
    {
        vaga: "Desenvolvedor backend",
        candidatos: [
            {nome: "Maicon souza"},
            {nome: "Miguel sanches"}
        ]
    },
    {
        vaga: "Estagiario",
        candidatos: [
            {nome: "Rodrigo soares"},
            {nome: "Felipe ramos"}, 
            {nome: "Thomas simoes"},
            {nome: "Peterson silva"}
        ]
    }
];

let exit = false;

do {
    const menu = prompt("Menu de Busca emprego ou colaboradores\n1- Listar vagas disponíveis\n2- Criar uma nova vaga\n3- Visualizar uma vaga\n4- Inscrever em uma vaga\n5- Excluir vaga\n6- Sair");


    switch(menu) {
        case "1": 
            vagas.forEach(element => {
               alert("Vaga disponivel: " + element.nomeVaga); 
            });
            
            const candidatosIncritos = vagas.reduce(function (valor, cadidato) {
                return valor + cadidato.candidatos;
            }, 0);

            alert("Cadidatos totais das vagas: " + candidatosIncritos);
            exit = false;
        break;
        case "2": 
            const nomeVaga = prompt("Nome da vaga: ");
            const descricaoVaga = prompt("Descrição da vaga: ");
            const limite = prompt("Data limite de inscrição: ");
            const confirmarCriar = confirm("Você deseja criar a vaga?");
            
            if(confirmarCriar === true) {
                const newVaga = {nomeVaga, descricaoVaga, limite, cadidatos: 0};
                vagas.push(newVaga);
                vagas.forEach(element => {
                    alert(element.nomeVaga);
                });
            } else {
                alert("Cancelando criação da vaga...");
            }
            exit = false;
        break;
        case "3": 
            const indice = parseInt(prompt("Digite o indice da vaga: "));

            if(indice >= 0 && indice < vagas.length) {
                const vagaSelecionada = vagas[indice];
                const candidatosVaga = candidatos[indice].candidatos;
                alert("Vaga: " + vagaSelecionada.nomeVaga + "\nDescrição: " + vagaSelecionada.descricaoVaga + "\nCandidatos incritos: " + vagaSelecionada.candidatos + "\nData limite: " + vagaSelecionada.limite);
                candidatosVaga.forEach(element => {
                    alert("\nCandidato: " + element.nome);
                });

            }
            exit = false;
        break;
        case "4":
            const nome = prompt("Nome do candidato: ");
            const vagaIndice = parseInt(prompt("Informe o indice da vaga: "));
            const confirmar = confirm("Essas são as informações a serem salva correto: \nNome do candidato: " + nome);

            if(confirmar === true) {
                candidatos[vagaIndice].candidatos.push({nome});
                vagas[vagaIndice].candidatos += 1;
                alert("Candidatura realizada!");
                exit = false;
            } else {
                alert("Não foi possivel finalizar candidatura...");
                exit = false
            }
        break;
        case "5":
            const indiceExcluir = parseInt(prompt("informe o indice da vaga a deletar: "));
            if(indiceExcluir >= 0 && indiceExcluir < vagas.length) {
                alert("Dados da Vaga a ser deletada\nVaga: " + vagas[indiceExcluir].nomeVaga + "\nDescrição: " + vagas[indiceExcluir].descricaoVaga + "\nCadidatos: " + vagas[indiceExcluir].candidatos);
                const confirmarExclusao = confirm("Deseja mesmo deletar a vaga?");

                if(confirmarExclusao === true) {
                    vagas.splice(indiceExcluir, 1);
                    candidatos.splice(indiceExcluir, 1);
                    alert("Vaga excluida!");
                    exit = false;
                } else {
                    alert("Não foi possivel excluir a vaga...");
                    exit = false;
                }
            }
        break;
        case "6":
            alert("Saindo do menu...");
            exit = true;
        break;
        default:
            alert("Opção invalida!");
    }

} while(exit === false);
