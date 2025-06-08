// Contador que faça a conversão de real para dólar 4 vezes
// Agora, faça com que o usuário decida quantas vezes ele poderá fazer a conversão

let cotacaoDolar = parseFloat(prompt("Informe a cotação do dólar (ex: 5.20):"));
let qtdeConversao = parseInt(prompt("Quantas vezes você quer fazer a conversão?"));
let contador = 1;

while (contador <= qtdeConversao) {
    let valorReais = parseFloat(prompt(`(${contador}/${qtdeConversao}) Digite um valor em reais:`));

    let valorDolares = valorReais / cotacaoDolar;
    console.log(`R$${valorReais.toFixed(2)} = US$${valorDolares.toFixed(2)}`);
    contador++;
}