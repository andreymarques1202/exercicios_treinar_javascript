const palavra = prompt("Digite uma palavra:");
let invertida = "";

for(let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];
}

if(palavra === invertida) {
    alert("A palavra " + palavra + " é um palindromo");
} else {
    alert("A palavra " + palavra + " não é um palindromo pois é diferente de " + invertida);
 }