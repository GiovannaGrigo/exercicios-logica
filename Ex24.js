// Descubra quantos patinhos foram passear

let qtdePatinhos = parseInt(prompt("Quantos patinhos foram passear?"));

for (let i = qtdePatinhos; i >= 1; i--) {
	if (i > 1) {
        console.log(`${i} patinhos foram passear...`);
    } else {
        console.log(`${i} patinho foi passear...`);
    }
}