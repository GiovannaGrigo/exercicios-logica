// Somar números usando For

let qtde = parseInt(prompt("Quantos números você quer somar?"));
let soma = 0;

for (let i = 1; i <= qtde; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número: `));
    soma += numero;
}
console.log(`A soma dos números é ${soma}.`);