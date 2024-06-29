const carOne = prompt("Insira o nome de um veiculo:");
const vel1 = prompt("Insira a velocidade do veiculo" + " " + carOne + ":");
const carTwo = prompt("Insira o nome do segundo veiculo:");
const vel2 = prompt(`Insira a velocidade do veiculo ${carTwo}:`);

if(vel1 > vel2) {
    alert("Veiculo " + carOne + " é mais rápido");
} else if(vel1 < vel2) {
    alert("Veiculo " + carTwo + " é mais rápido");
} else {
    alert("ambos veiculos tem a mesma velocidade!");
}
