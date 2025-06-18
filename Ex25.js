// Faça um contador usando For. Se o usuário digitar 1, conte de 1 a 10. Se ele digitar 2, conte de 10 a 1

console.log("Vamos contar!\nDigite 1 para contar de 1 a 10\nDigite 2 para contar de 10 a 1");
let num = parseInt(prompt("Digite 1 ou 2."));

if (num == 1) {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
} else if (num == 2) {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
} else {
    console.log("Número inválido!");
}