// Contador de 0 a um número digitado pelo usuário usando doWhile mas dessa vez, mostrando uma tabuada

let contador = 0;

let multiplicador = parseInt(prompt("Qual tabuada você quer fazer?"));
let num = parseInt(prompt("Até qual número multiplicar?"));

do {
    let resultado = multiplicador * contador;
    console.log(`${multiplicador} X ${contador} = ${resultado}`);
    contador++;

} while (contador <= num);