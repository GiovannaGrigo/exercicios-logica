// Descobrir se um número é primo

let contador = 1;
let num;
let contDiv = 0;

num = parseInt(prompt("Digite um número: "));
do {
    if (num % contador == 0) {
        contDiv++;
    }
    contador++;
} while (contador <= num);
if (contDiv > 2) {
    console.log(`O número ${num} não é primo`);
} else {
    console.log(`O número ${num} é primo`);
}