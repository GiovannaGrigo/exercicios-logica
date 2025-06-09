// Contador de números negativos

let negativos = [];
let contador = 0;

do {
    let num = parseInt(prompt("Digite um número: "));
    contador++;
    if (num < 0) {
        negativos.push(num);
    }
    resposta = prompt("Quer continuar? [S/N]");
} while (resposta != "N");

console.log(`Números negativos digitados: ${negativos}`);