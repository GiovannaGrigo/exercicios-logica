// Exercício 1: Ana está fazendo aniversário e não sabe quantas velinhas colocar no bolo. Ela não lembra sua idade, somente o ano em que nasceu.
// Descubra a idade de Ana e quantas velinhas ela deve usar.

var anoNasc;
var anoAtual;
var idade;
var qtdeVelas = idade + 1;

anoNasc = prompt("Olá Ana, em que ano você nasceu?");
anoAtual = prompt("Em que ano nós estamos?");

idade = anoAtual - anoNasc;
console.log(`Ana você tem ${idade} anos.`);
console.log(`Você precisará de ${qtdeVelas} velinhas!`);