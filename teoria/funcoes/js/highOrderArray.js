const onePiece = [
    {nome: "Luffy", akumaNoMi: true, funcao: "Capitão", recompensa: "300 milhões de beris"},
    {nome: "Zoro", akumaNoMi: false, funcao: "Espadachim", recompensa: "120 milhões de beris"},
    {nome: "Franky", akumaNoMi: false, funcao: "Carpinteiro", recompensa: "75 milhões de beris"},
    {nome: "Sanji", akumaNoMi: false, funcao: "Cozinheiro", recompensa: "50 milhões de beris"},
    {nome: "Robin", akumaNoMi: true, funcao: "Arqueologa", recompensa: "80 milhões de beris"},
    {nome: "Nami", akumaNoMi: false, funcao: "Navegadora", recompensa: "40 milhões de beris"},
    {nome: "Ace", akumaNoMi: true, funcao: "???", recompensa: "???"},
    {nome: "Brook", akumaNoMi: true, funcao: "Musico", recompensa: "???"},
    {nome: "Chopper", akumaNoMi: true, funcao: "Médico", recompensa: "50 beris"},
    {nome: "Ussop", akumaNoMi: false, funcao: "Atirador", recompensa: "30 milhões de beris"},
]

//Metodo map pega um array existente e criando um novo array sem alterar o array original

const exemplo = onePiece.map(function (personagem) {
    return personagem.nome;
});

console.log(exemplo);

//Metodo filter ele pega um array existente e filtra o array com elementos especificos e criar um array novo

const akumaNoMi = onePiece.filter(function (personagem) {
    return personagem.akumaNoMi === true;
});

console.log(akumaNoMi);


//Metodo reduce transforma um array em qualquer coisa 

const cartasDeProcurado = onePiece.reduce(function (valor, personagem) {
    return valor + personagem.recompensa;
}, 0);

console.log("Total de recompensa dos personagens: " + cartasDeProcurado + " beris");


const tripulantes = onePiece.reduce(function (objeto, tripulante) {
    if(objeto[tripulante.funcao]) {
        objeto[tripulante.funcao].push(tripulante);
    } else {
        objeto[tripulante.funcao] = [tripulante];
    }

    return objeto;
}, {});

console.log(tripulantes);