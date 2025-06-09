// Cálculo de fatorial
// Agora adiciona a possibilidade do usuário ver o fatorial de um número quantas vezes quiser

let resposta;

do {
    let num = parseInt(prompt("Digite um número: "));
    let fatorial = 1;
    let contador = 1;

    do {
        fatorial *= contador;
        contador++;
    } while (contador <= num);
    console.log(`O fatorial de ${num} é ${fatorial}`);

    resposta = prompt("Quer continuar? [S/N]");
} while (resposta === "S");




// CÓDIGO SEM PERGUNTAR SE O USUÁRIO DESEJA CONTINUAR
/*
let num = parseInt(prompt("Digite um número: "));
let fatorial = 1;
let contador = 1;

do {
    fatorial *= contador;
    contador++;
    resposta = prompt("Quer continuar? [S/N]");
    if (resposta == "S") {
        do {
            fatorial *= contador;
            contador++;
        } while (resposta != "N");
    }
} while (contador <= num);
console.log(`O fatorial de ${num} é ${fatorial}`);
*/