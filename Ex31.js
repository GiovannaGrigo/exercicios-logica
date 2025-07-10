// Criar uma função que soma dois números

function soma(a, b) {
    return a + b;
}

const resultado = soma(3, 5);
console.log(resultado);


// Faça o mesmo, mas dessa vez peça para o usuário digitar os números

function somar(a, b) {
    return a + b;
}

a = parseFloat(prompt("Digite um número: "));
b = parseFloat(prompt("Digite um número: "));

const result = somar(a, b);
console.log(result);