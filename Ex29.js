// Sequência de Fibonacci

let num = parseInt(prompt("Quantos termos da sequência de Fibonacci você quer ver?"));

let a = 0, b = 1;
let resultado = "";

for (let i = 0; i < num; i++) {
    resultado += a + " ";
    let proximo = a + b;
    a = b;
    b = proximo;
}

console.log("Sequência de Fibonacci:");
console.log(resultado);