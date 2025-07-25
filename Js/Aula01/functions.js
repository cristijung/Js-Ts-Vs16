//funções

//ex de sintaxe de função simples
function saudacao(nome) { //entre parenteses são os parâmetro
    return `Olá, ${nome}! Seja Bem Vindo(a).`; 
}

console.log(saudacao('Ana Banana')); //invocação da função com a definição do argumento

console.log('----------------------------');
//ex de função com uma expressão
const somar = function(a, b) {
    return a + b;
};
console.log(somar(5, 6));

console.log('----------------------------');
//ex com múltiplos parâmetros e arrow function
const multiplicar = (x, y) => {
    return x * y;
}

console.log(multiplicar(4, 6));

console.log('----------------------------');
//ex com único parâmetro
const dobrar = numero => numero * 2; //retorno já está implícito
console.log(dobrar(14));

// Parâmetros e Argumentos
// - parametro: nome da variável que a função espera receber (nome, a, b)
// - argumentos: são os valores que são passados nos argumentos

console.log('----------------------------');
//escopo de função
function calcularImposto(salario) {
    const imposto = salario * 0.10; //imposto é local e é só reconhecido nesta função
    return imposto;
}

console.log(calcularImposto(5001.00));

console.log('----------------------------');
function executarOperacao(operacao, a, b) {
    return operacao(a, b);
}
const subtrair = (x, y) => x - y;

console.log(executarOperacao(somar, 10, 12)); //usar a função somar definida
console.log(executarOperacao(subtrair, 10, 8)); //usar a função subtrair