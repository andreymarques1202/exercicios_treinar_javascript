const numero = prompt("Determine um numero de 1 a 20 para exibir a tabuada:");
const tabuada = [];


for(let i = 0; i <= 20; i++) {
    let multi = numero * i;
    let result = numero + " X " + i + " = " + multi;
    tabuada.push(result);
}

tabuada.forEach(element => {
    console.log(element);
});