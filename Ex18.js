// Cálculo de fatorial

let num = parseInt(prompt("Digite um número: "));
let fatorial = 1;
contador = 1;

do {
    fatorial *= contador;
    contador++;
} while (contador <= num);
console.log(`O fatorial de ${num} é ${fatorial}`);