const name = prompt("Qual seu nome:");
const lastname =  prompt("Qual seu sobrenome?");
const area = prompt("area de estudo:");
const ano = prompt("ano de nascimento:");

const convert = parseFloat(ano);
const idade = 2024 - convert;

alert(`
    nome do recruta: ${name}
    sobrenome do recruta: ${lastname}
    area de estudo: ${area}
    idade: ${idade} anos.`);