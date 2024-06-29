const valor = parseFloat(prompt("digite um valor de metros:"));

if(!isNaN(valor)) {
    const medida = prompt("Escolha a medida para converter\nA)mm\nB)cm\nC)dm\nD)dam\nE)hm\nF)km");


    switch (medida) {
        case "a":
            const mm = valor * 10 * 10 * 10;
            alert("Seu valor era " + valor + "m e agora é " + mm + "mm");
            break;
        case "b":
            const cm = valor * 10 * 10;
            alert("Seu valor era " + valor + "m e agora é " + cm + "cm");
            break;
        case "c": 
            const dm = valor * 10;
            alert("Seu valor era " + valor + "m e agora é " + dm + "dm");
            break;
        case "d":
            const dam = valor / 10;
            alert("Seu valor era " + valor + "m e agora é " + dam + "dam");
            break;
        case "e":
            const hm = valor / 10 / 10;
            alert("Seu valor era " + valor + "m e agora é " + hm + "hm");
            break;
        case "f":
            const km = valor / 10 / 10 / 10;
            alert("Seu valor era " + valor + "m e agora é " + km + "km");
            break;

        default:
            alert("Opção inválida");
    }
} else {
    alert("Erro! só é aceito números");
}