// Descubra a média de um aluno e se ele está APROVADO ou REPROVADO. Considere que:
// A nota minima para ser aprovado é 7,
// O aluno tem apenas 2 notas,
// Se a nota for entre 4 e 6, então ele está de RECUPERAÇÃO.

var nota1 = parseFloat(prompt("Qual a sua primeira nota?"));
var nota2 = parseFloat(prompt("Qual a sua segunda nota?"));

var media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log(`A sua média é ${media}, e você está APROVADO!`);
} else if (media >= 4) {
    console.log(`A sua média é ${media}, e você está de RECUPERAÇÃO!`);
} else {
    console.log(`A sua média é ${media}, e você está REPROVADO!`);
}


/* CÓDIGO ANTERIOR
 if (media >= 7) {
    console.log(`A sua média é ${media} e você está aprovado!`);
 } else {
    console.log(`A sua média é ${media} e você está reprovado!`);
 }
*/