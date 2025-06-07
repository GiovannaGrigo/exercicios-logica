// Paula quer fazer um empréstimo no banco. Sabe-se que ao fazer empréstimos, você deve pagar 20% de juros. Mas, poderá parcelar.

var valorEmprestimo;
var valorJuros;

valorEmprestimo = prompt("Quantos reais você quer no empréstimo?");

valorJuros = (valorEmprestimo * 20) / 100;
console.log(`Você deverá pagar ${valorJuros} reais de juros.`);

var parcela = prompt("Deseja parcelar o valor?");

if (parcela == "sim") {
    let qtdeParcelas = prompt("Em quantas vezes?");
    let valorParcelas = valorJuros / qtdeParcelas;
    console.log(`Você deverá pagar ${valorParcelas} reais por ${qtdeParcelas} meses.`);
} else {
    console.log("Até mais!");
}