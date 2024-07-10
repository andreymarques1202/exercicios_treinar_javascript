let sair = false;


function triangulo(base, altura) {
    return base * altura / 2;
}

function retangulo(base, altura) {
    return base * altura;
}

function quadrado (lado) {
    return lado ** 2;
}

function trapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2;
}

function circulo(raio, pi = 3.14) {
    return pi * raio ** 2;
}

do {
    const menu = prompt("Calcule as formas geométricas\n1- área do triângulo\n2- área do retângulo\n3- área do quadrado\n4- área do trapézio\n5- área do círculo\n 6- sair");

    switch(menu) {
        case "1":
            const baseT = parseFloat(prompt("Base: "));
            const alturaT = parseFloat(prompt("Altura: "));
            alert(triangulo(baseT, alturaT));

            sair = false;

        break;
        case "2":
            const base = parseFloat(prompt("Base: "));
            const alturaR = parseFloat(prompt("Altura: "));

            alert(retangulo(base, alturaR));

            sair = false;
        break;
        case "3": 
            const lado = parseFloat(prompt("Lados: "));
            alert(quadrado(lado));

            sair = false;
        break;
        case "4":
            const baseMaior = parseFloat(prompt("Base maior: "));
            const baseMenor = parseFloat(prompt("Base menor: "));
            const altura = parseFloat(prompt("Altura: "));

            alert(trapezio(baseMaior, baseMenor, altura));

            sair = false;
        break
        case "5": 
            const raio = parseFloat(prompt("Raio: "));

            alert(circulo(raio));

            sair = false;
        break;
        case "6":
            alert("Saindo do menu...");
            sair = true;
        break;
        default: 
        alert("Opção invalida")

    } 
}while(sair !== true);