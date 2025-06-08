// Contador de 0 a um número pedido ao usuário mas dessa vez, somar esses números

let num = parseInt(prompt("Quer contar até qual número?"));
let salto = parseInt(prompt("De quanto em quanto contar?"));

let soma = 0;
let contador = 0;

while (contador <= num) {
    console.log(contador);
    soma += contador;
    contador = contador + salto;
}
console.log(`A soma dos números é ${soma}`);