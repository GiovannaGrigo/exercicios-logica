/* Ler 5 números e mostrar:
    - a soma dos valores
    - a media dos valores
    - valores divisiveis por 5
    - valores nulos
    - a soma dos valores pares
*/

const qtde = 5;
let soma = 0;
let media = 0;
let divisiveis = 0;
let nulos = 0;
let pares = 0;
let somaPares = 0;

for (let i = 1; i <= qtde; i++) {
    let num = parseInt(prompt(`Digite o ${i}º número: `));
    soma += num;

    if (num === 0) nulos++;
    if (num % 5 === 0) divisiveis++;
    if (num % 2 === 0) somaPares += num;
}

media = soma / qtde;

console.log(`A soma dos números é: ${soma}\nA média dos números é: ${media}\nNúmeros divisíveis por 5: ${divisiveis}\nValores nulos: ${nulos}\nA soma dos números pares é: ${somaPares}`);