// // Contador de 0 a um número pedido ao usuário mas dessa vez, somar esses números. Usando doWhile

let soma = 0;
let contador = 0;

do {
    let num = parseInt(prompt("Digite um número: "));
    soma += num;

    resposta = prompt("Quer continuar? [S/N]");
} while (resposta != "N");
console.log("A soma de todos os valores digitados é " + soma);