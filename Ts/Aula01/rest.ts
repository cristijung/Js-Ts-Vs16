// operador rest é o inverso do spread. O rest os recolhe e agrupa em uma ÚNICA VARIÁVEL
// uso comum é em parâmtro de função

function somarComPrimeiro(primeiroNumero: number, ...outrosNumeros: number[]): number {
    let somar = primeiroNumero;

    for (const numero of outrosNumeros) {
        somar += numero;
    }
    return somar;
}

const resultado1 = somarComPrimeiro(10, 8);
const resultado2 = somarComPrimeiro(10, 6, 20);
const resultado3 = somarComPrimeiro(10, 20, 30, 40);
const resultado4 = somarComPrimeiro(10, 102, 103, 104, 105);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);