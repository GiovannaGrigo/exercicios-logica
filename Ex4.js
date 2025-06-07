// João comprou produtos eletrônicos nos EUA e precisa pagar imposto ao voltar para o Brasil. Sabe-se que o valor do imposto é de 60%

var valorCompra;
var valorFinal;

valorCompra = prompt("Qual o valor da sua compra?");

valorFinal = (valorCompra * 60) / 100;

console.log(`Você deve pagar ${valorFinal} reais de imposto.`);