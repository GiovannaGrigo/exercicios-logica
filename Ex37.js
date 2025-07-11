// Ler 7 números e mostrar quantos e quais são pares, e quais as posições deles

let numeros = [];
let pares = [];
let totalPar = 0;
let posicaoPar = [];

for (let i = 0; i < 7; i++) {
    let num = parseFloat(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(num);

    if (num % 2 == 0) {
        pares.push(num);
        posicaoPar.push(i);
        totalPar++;
    }
}
console.log(`\nTotal de números pares: ${totalPar}\nNúmeros pares: ${pares}\nPosição de números pares: ${posicaoPar}`);