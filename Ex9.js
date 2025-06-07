// Descubra a média de um aluno e se ele está APROVADO ou REPROVADO. Considere que a nota minima para ser aprovado é 7, e que o aluno tem somente duas notas

var nota1 = parseFloat(prompt("Qual a sua primeira nota?"));
var nota2 = parseFloat(prompt("Qual a sua segunda nota?"));

var media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log(`A sua média é ${media} e você está aprovado!`);
} else {
    console.log(`A sua média é ${media} e você está reprovado!`);
}