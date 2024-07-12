//High order function são funções de alta ordem que recebem outras funções como parametro

function calculadora(x, y, op) {
    console.log("Calculando...");
    const res = op(x, y);
    return res;
}

function soma(x, y) {
    console.log("Somando " + x + " + " + y);
    return x + y;
}

function sub(x, y) {
    console.log("Subtraindo " + x + " - " + y);
    return x - y;
}

function mult(x, y) {
    console.log("Multiplicando " + x + " x " + y);
    return x * y;
}

function div(x, y) {
    console.log("Dividindo " + x + " / " + y);
    return x / y;
}

console.log(calculadora(2, 6, soma));
console.log(calculadora(4, 8, sub));
console.log(calculadora(5, 8, mult));
console.log(calculadora(200, 5, div));


//exemplo de high order sendo usado

const frutas = ["maçã", "banana", "limão", "abacaxi"];

function exibir(element, indice, arr) {
    console.log({element, indice, arr});
}

for(let i = 0; i < frutas.length; i++) {
    exibir(frutas[i], i, frutas);
}


//temos tambem algo que faz exatamente oque foi feito acima com forEach

frutas.forEach(exibir);