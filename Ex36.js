// Mostrar 6 números digitados por um usuário usando Array

let numeros = [];

for (let i = 0; i < 6; i++) {
    let num = parseFloat(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(num);
}
console.log(numeros);