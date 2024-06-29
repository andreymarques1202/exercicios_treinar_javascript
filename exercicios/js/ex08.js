let money = 0;
let sair = false;

do {
    const initial = prompt("Deseja saber a quantia inicial de dinheiro disponivel?");
    
    if(initial.toLowerCase() === "sim" || initial.toLowerCase() === "s") {
        alert("Saldo: R$" + money);
        const options = prompt("Menu de opções\n1- Adicionar dinheiro\n2- Retirar dinheiro\n3- Sair");
        if(options == 1) {
            const add = prompt("Digite a quantia que deseja adicionar:");
            const newValue = parseFloat(add) + money;
            money = newValue;
            sair = false;
            alert("Quantia adicionada ao saldo R$" + add);
        } else if (options == 2) {
            const remove = prompt("Digite a quantia que deseja retirar:");
            if(remove > money) {
                alert("[ERRO] Valor disponivel para remoção: R$" + money);
                sair = false;
            } else {
                const newValue = money - parseFloat(remove);
                money = newValue;
                sair = false;
                alert("Quantia removida do saldo R$" + remove);
            }

            
        } else if (options == 3) {
            sair = true;
        } else {
            alert("Opção invalida!\nReiniciando programa...");
        }

    } else {
        sair = true;
    }
} while(sair === false);

alert("Programa encerrado");