// Contar de 0 a um número digitado pelo usuário e exibir apenas os números pares entre eles.

var num = parseInt(prompt("Digite um número: "));

for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}



// Agora, fazer uma contagem regressiva exibindo os números pares:

var num = parseInt(prompt("Digite um número: "));

for (let i = num; i >= 0; i--) {
    if (i % 2 == 0) {
        console.log(i)
    }
}