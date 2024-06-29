const n1 = prompt("numero de 1 a 10:");
const n2 = prompt("outro numero de 1 a 10:");

const convertN1 = parseFloat(n1);
const convertN2 = parseFloat(n2);

const soma = convertN1 + convertN2;
const menos = convertN1 - convertN2;
const multi = convertN1 * convertN2;
const div = convertN1 / convertN2;

alert(`
    ${n1} + ${n2} = ${soma}
    ${n1} - ${n2} = ${menos}
    ${n1} x ${n2} = ${multi}
    ${n1} / ${n2} = ${div}`);