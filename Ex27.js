// Ler 5 números e exibir quais estão entre 0 e 10

var qtde = 5;
var num = 0;

for (let i = 1; i <= qtde; i++) {
    num = parseFloat(prompt(`Digite o ${i}º número: `));
    if (num > 0 && num < 10) {
        console.log(`O número ${num} está entre 0 e 10 (posição ${i})`);
    }
}


// Agora, exibir a soma dos números ímpares digitados que estão entre 0 e 10

var qtde = 5;
var num = 0;
var soma = 0;

for (let i = 1; i <= qtde; i++) {
    num = parseFloat(prompt(`Digite o ${i}º número: `));
    if (num > 0 && num < 10 && num % 2 != 0) {
        soma += num;
    }
}
console.log(soma);