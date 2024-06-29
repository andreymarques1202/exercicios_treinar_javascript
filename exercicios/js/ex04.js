const personagemOne = {nome: undefined, vida: undefined, dano: undefined};
const personagemTwo = {nome: undefined, vida: undefined, defesa: undefined, escudo: undefined};

const p1Name= prompt("Nome do Player 1:");
personagemOne.nome = p1Name;

const p1Life = prompt("Pontos de vida do player 1:");
personagemOne.vida = p1Life;

const p1Dano = prompt("Pontos de dano do player 1:");
personagemOne.dano = p1Dano;

const p2Name= prompt("Nome do Player 2:");
personagemTwo.nome = p2Name;

const p2Life = prompt("Pontos de vida do player 2:");
personagemTwo.vida = p2Life;

const p2Defesa = prompt("Pontos de defesa do player 2:");
personagemTwo.defesa = p2Defesa;

const p2Escudo = prompt("Player 2 possui escudo? ");
personagemTwo.escudo =  p2Escudo;

if(personagemOne.dano > personagemTwo.defesa && personagemTwo.escudo == "nao") {
    const dano = parseFloat(personagemTwo.defesa) - parseFloat(personagemOne.dano)
    personagemTwo.vida = dano;

    alert("Player " + personagemTwo.nome + " tomou dano de " + personagemOne.dano + " do personagem " + personagemOne.nome);

    alert(`
        após jogada
        
        Personagem: ${personagemOne.nome}
        Vida: ${personagemOne.vida}`);
    alert(`
        Personagem: ${personagemTwo.nome}
        Vida: ${personagemTwo.vida}`);

} else if(personagemOne.dano > personagemTwo.defesa && personagemTwo.escudo == "sim") {
    const dano = parseFloat(personagemOne.dano) / 2;
    personagemTwo.vida = parseFloat(personagemTwo.vida) - dano;
    alert("Personagem " + personagemTwo.nome + " possui escudo entao seu dano foi de " + dano + " do personagem " + personagemOne.nome);

    alert(`
        após jogada
         
        Personagem: ${personagemOne.nome}
        Vida: ${personagemOne.vida}`);
    alert(`
        Personagem: ${personagemTwo.nome}
        Vida: ${personagemTwo.vida}`);
} else if (personagemOne.dano <= personagemTwo.defesa) {
    alert("Player " + personagemTwo.nome + " recebeu 0 pontos de dano do personagem " + personagemOne.nome);

    alert(`
        após jogada
        
        Personagem: ${personagemOne.nome}
        Vida: ${personagemOne.vida}`);
    alert(`
        Personagem: ${personagemTwo.nome}
        Vida: ${personagemTwo.vida}`);
}