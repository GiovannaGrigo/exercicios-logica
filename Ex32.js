// Função que verifica se um número é par ou ímpar

function verificaPar(num)  {
    if (num%2 == 0)
        return console.log(`${num} é par!`);
    else
        return console.log(`${num} é ímpar!`);
}

num = parseInt(prompt("Digite um número: "));

const resultado = verificaPar(num);