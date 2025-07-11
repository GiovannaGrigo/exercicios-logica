// Analisador de Nomes

let nome = prompt("Digite seu nome: ");

console.log(`\nO comprimento do seu nome é: ${nome.length}\nSeu nome em letras maiúsculas é: ${nome.toUpperCase()}\nSeu nome em letras minúsculas é: ${nome.toLowerCase()}\nA primeira letra do seu nome é: ${nome.charAt(0)}\nA última letra do seu nome é: ${nome.charAt(nome.length - 1)}`);

// Encontrar a posição da letra A
let posicoesA = [];
for (let i = 0; i < nome.length; i++) {
    if (nome[i].toLowerCase() === 'a') {
        posicoesA.push(i);
    }
}

if (posicoesA.length > 0) {
    console.log(`\nA letra A aparece nas posições: ${posicoesA.join(", ")}`);
} else {
    console.log("\nSeu nome não contém a letra A.");
}

// Mostrar o nome invertido
let nomeInvertido = nome.split("").reverse().join("");
console.log(`Seu nome invertido é: ${nomeInvertido}`);