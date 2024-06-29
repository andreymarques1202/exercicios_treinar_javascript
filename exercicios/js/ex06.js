const name = prompt("qual seu nome:")
let res = prompt("Já visitou alguma cidade?");
const cidades = [];
let contagem = 0;

while(res.toLowerCase() === "sim") {
    
    let cidade = prompt("Qual o nome da cidade:");
    cidades.push(cidade);
    contagem++;
    
    let res = prompt("visitou alguma outra cidade?");

    if(res.toLowerCase() === "nao") {
        break
    }
}

cidades.forEach(element => {
    alert("Turista: " + name + "\nCidade visitada: " + element);
});

alert("Total de: " + contagem + " visitadas");