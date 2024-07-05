const imoveis = [];

let sair = false;

do {
    const menu = prompt("Imobiliaria ascov\nNúmeros de imóveis: " + imoveis.quantidade + "\n1- Vender imóvel\n2- Mostrar imóveis disponiveis\n3- Sair");
    switch(menu) {
        case "1":
            const imovel = {}
            const name = prompt("Nome do próprietario:");
            const bedroom = prompt("Quantos quartos possui o imovél:");
            const bathroom = prompt("Quantidade de banheiros do imóvel:");
            const confirma = prompt("Você deseja continuar?");
            if(confirma) {
                imoveis.push(imovel);
            }

            imovel.proprietario = name;
            imovel.quartos = bedroom;
            imovel.bathroom = bathroom;
            alert("Dados do imóvel\nProprietario: " + imovel.proprietario + "\nQuantos quartos o imóvel possui: " + imovel.bedroom + "\nQuantos banheiros possui no imóvel: " + imovel.bathroom);
            alert("Imóvel adicionado para venda");

            sair = false;
        break;
        case "2":
            for(let i = 0; i < imoveis.length; i++) {
                    alert("Imóvel " + (i + 1) + "\nProprietario: " + imoveis[i].proprietario + "\nQuartos: " + imoveis[i].bedroom + "\nBanheiros: " + imoveis[i].bathroom);
                }
            sair = false;
        break;
        case "3": 
            alert("Encerrando sistema...");
            sair = true;
        break;
        default:
            alert("Opção inválida!");
            sair = false;
    }

} while (sair != true);