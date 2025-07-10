// Função que calcula o fatorial de um número

function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * fatorial(num - 1);
}

num = parseInt(prompt("Digite um número: "));
console.log(fatorial(num));