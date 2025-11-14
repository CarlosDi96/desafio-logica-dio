const prompt = require("prompt-sync")();

const nome = prompt("Digite o nome do herói: ");
const xp = prompt("XP do herói: ");

if (xp <= 1000)
    exibirClassicacao("Ferro");
else if (xp >= 1001 && xp <= 2000)
    exibirClassicacao("Bronze");
else if (xp >= 2001 && xp <= 5000)
    exibirClassicacao("Prata");
else if (xp >= 5001 && xp <= 7000)
    exibirClassicacao("Ouro");
else if (xp >= 7001 && xp <= 8000)
    exibirClassicacao("Platina");
else if (xp >= 8001 && xp <= 9000)
    exibirClassicacao("Ascendente");
else if (xp >= 9001 && xp <= 10000)
    exibirClassicacao("Imortal");
else if (xp >= 10001)
    exibirClassicacao("Radiante");
else
    console.log("Sem classificação para o herói.");


function exibirClassicacao(nivel) {
    console.log(`O herói de nome ${nome.toUpperCase()} está no nível ${nivel.toUpperCase()}`);
}