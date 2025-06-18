// Descobrir se um número é primo ou não usando For

let num = parseInt(prompt("Digite um número: "));
let qtdeDivisores = 0;

for (let i = 1; i <= num; i++) {
    if(num % i == 0){
        qtdeDivisores++;
    }
}

if(qtdeDivisores > 2) {
    console.log(`${num} não é primo.`);
}
else {
    console.log(`${num} é primo.`);
}
