let contador = 0;

do {
    const menu = prompt("Bem vindo ao menu de atendimento\n1- falar com atendente\n2- Suporte tecnico\n3- Mudar de plano\n4- Contratar plano\n5- Encerrar atendimento");
    alert("Opção escolhida: " + menu);
    contador = parseFloat(menu);
} while(contador !== 5)

alert("Encerrando atendimento...");
alert("Atendimento finalizado!");