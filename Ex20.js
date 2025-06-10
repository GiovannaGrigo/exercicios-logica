// Faça um contador. Se o usuário digitar 1, conte de 1 a 10. Se ele digitar 2, conte de 10 a 1

console.log("Vamos contar!\nDigite 1 para contar de 1 a 10\nDigite 2 para contar de 10 a 1");
let num = parseInt(prompt("Digite 1 ou 2."));


if (num == 1) {
    let contador1 = 1;
    do {
        console.log(contador1);
        contador1++;
    } while (contador1 <= 10);
} else if (num == 2) {
    let contador2 = 10;
    do {
        console.log(contador2);
        contador2--;
    } while (contador2 >= 1);
} else {
    console.log("Número inválido!");
}