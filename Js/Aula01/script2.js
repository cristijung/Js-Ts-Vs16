//tipos primitivos e não primitivos

//primitivos
const text1 = 'Oi';
const text2 = '123.456';
const text3 = 'Ana Banana é uma música do TNT!';
let text4 = 123;
const text5 = 12378.7897865;
const text6 = "maçã";

//não primitivos
//objetos
let pessoa = {
    nome: 'Ana',
    idade: 56,
    cidade: 'Porto Alegre'
}

console.log(pessoa)

//array
let cores = ['vermelho', 'amarelo', 'verde', 'laranja'];
console.log(cores);

//array de objetos
let biblioteca = [
    {id: 12, titulo: 'It', autor: 'Stephen King', ano: 1974},
    {id: 14, titulo: 'Drácula', autor: 'Bram Stoker', ano: 1888},
    {id: 16, titulo: 'Capitães de Areia', autor: 'Jorge Amado', ano: 1936},
];

console.log(biblioteca);

// function
function somar(a, b) {
    return a + b;
}

// tipos:
// primitivos: undefined, null, boolean, string, bigin, symbol
// não primitivos: object, array, function, date, RegExp, map, set 

let array1 = [1, 2, 3];
let array2 = array1; // cópia por referência
array2.push(4);
console.log(array1);
console.log(array2);

let frutas = ['maçã', 'banana', 'laranja', 'morango'];
console.log(frutas);
console.log(frutas[0]);

//add elemento
frutas.push('uva');
console.log(frutas);

//remover no início
frutas.shift();
console.log(frutas)

//iterando
for (let i = 0; i < frutas.length; i ++) {
    console.log(frutas[i]);
}
console.log('---------------');
frutas.forEach(function(frutas) {
    console.log(frutas);
})

console.log('---------------');
frutas[2] = 'melancia';
console.log(frutas);
frutas.unshift('jaca');
console.log(frutas);