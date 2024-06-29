const chapeuDePalha1 = ["Luffy", "Zoro", "Nami", "Ussop"];
const chapeuDePalha2 = ["Sanji", "Chopper", "Robin"];

//função cortar elementos do array utilizado de um indice para o outro exemplo (0,1) tambem funciona com numeros negativos referenciando o final do array
const Ep1 = chapeuDePalha1.slice(0, 2);

console.log(chapeuDePalha1);
console.log(Ep1);

const Ep2 = chapeuDePalha1.slice(-1);

console.log(chapeuDePalha1);
console.log(Ep2);

//função concatenando array podendo ser um ou mais elementos e devolve o resultado sem alterar nenhum dos array criando um novo array com os elementos juntos

const tripulação = chapeuDePalha1.concat(chapeuDePalha2);

console.log(tripulação);