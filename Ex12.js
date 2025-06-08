// Contador de 0 a um número pedido ao usuário

let num = parseInt(prompt("Quer contar até qual número?"));
let salto = parseInt(prompt("De quanto em quanto contar?"));
let contador = 0;

while (contador <= num) {
    console.log(contador);
    contador = contador + salto;
}