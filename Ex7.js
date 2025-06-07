// Cálculo de IMC
// Tabela: < 18,5 (abaixo do peso); entre 18,5 e 24,9 (peso normal); 25 a 29,9 (excesso de peso); 30 a 34,9 (obesidade I); > 35 (obesidade II)

var peso = prompt("Qual o seu peso?");
var altura = prompt("Qual a sua altura?");

var imc = peso / (altura*altura);

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc} e você está abaixo do peso. Cuidado!`);
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é ${imc} e você está no peso ideal. Parabéns!`);
} else if (imc >= 25 && imc <= 29.9) {
    console.log(`Seu IMC é ${imc} e você está com excesso de peso. Atenção!`);
} else if (imc >= 30 && imc <= 34.9) {
    console.log(`Seu IMC é ${imc} e você está com obesidade grau 1. Cuidado!`);
} else {
    console.log(`Seu IMC é ${imc} e você está com obesidade grau 2. Cuidado!`)
}