// Contador que faça a conversão de real para dólar 4 vezes

let cotacaoDolar = parseFloat(prompt("Informe a cotação do dólar (ex: 5.20):"));
let contador = 1;

while (contador <= 4) {
    let valorReais = parseFloat(prompt(`(${contador}/4) Digite um valor em reais:`));

    let valorDolares = valorReais / cotacaoDolar;
    console.log(`R$${valorReais.toFixed(2)} = US$${valorDolares.toFixed(2)}`);
    contador++;
}