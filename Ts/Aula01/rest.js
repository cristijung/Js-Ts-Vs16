// operador rest é o inverso do spread. O rest os recolhe e agrupa em uma ÚNICA VARIÁVEL
// uso comum é em parâmtro de função
function somarComPrimeiro(primeiroNumero) {
    var outrosNumeros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        outrosNumeros[_i - 1] = arguments[_i];
    }
    var somar = primeiroNumero;
    for (var _a = 0, outrosNumeros_1 = outrosNumeros; _a < outrosNumeros_1.length; _a++) {
        var numero = outrosNumeros_1[_a];
        somar += numero;
    }
    return somar;
}
var resultado1 = somarComPrimeiro(10, 8);
var resultado2 = somarComPrimeiro(10, 6, 20);
var resultado3 = somarComPrimeiro(10, 20, 30, 40);
var resultado4 = somarComPrimeiro(10, 102, 103, 104, 105);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
