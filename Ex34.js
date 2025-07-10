// Função de sequência de fibonacci

function fibonacci(a, b, num) {
    let resultado = ""
    for (let i = 0; i < num; i++) {
        resultado += a + " ";
        let proximo = a + b;
        a = b;
        b = proximo;
    }
    return resultado;
}

a = 0;
b = 1;

num = parseInt(prompt("Quantos termos da sequência de Fibonacci você quer ver? "));
console.log(fibonacci(a, b));