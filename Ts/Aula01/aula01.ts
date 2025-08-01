// para executar um arquivo .tsc será preciso utilizar o tscompiller
// colocando o 'tsc' antes do arquivo
// tsc nome_arquivo.ts
// se o compiller der problema
// npm i -g typescript

//código base para variáveis e tipos
// tipos básicos do Ts
var objetoCasa: string = 'roupeiro'; 
let idade: number = 24;
let cores = 'vermelho'; //tipo inferido
let peso: number = 1.75;
const CIDADE: string = 'Porto Alegre';

// arrays
let num: number[] = [1, 2, 3];
let listaNomes: string[] = ["Ana", "Bob", "Bia"];

// interfaces
interface Pessoa {
    nome: string;
    idade: number;
    altura: number;
    peso?: number | string; //o '?' é opcional
    endereco: any; //significa q esta prop pode receber dado de qualquer tipo
}

// types 
let codigo: string | number; //este '|' (pipe) significa 'ou' --- União de tipos
codigo = 'abc';
codigo = 123;

// quando se usa interface extends
interface Funcionario extends Pessoa {
    cargo: string;
    setor: string;
    ferias: string;
    redimentos: number;
}

//função generica
function identidade<T>(parametro: T): T {
    return parametro;
}
//como se usa
let resUm = identidade<string>('Ana Banana');
let resDois = identidade<number>(1.75);

//interface genérica
interface Resposta<T> {
    resposta: T;
}
//como usar
let respostaUm: Resposta<string> = {resposta: 'Oiii'};
let respostaDois: Resposta<number> = {resposta: 123};
let respostaTres: Resposta<boolean> = {resposta: false};

//como não declarar
//isso é um paradoxo
interface Teste {
    vlr1: any;
    vlr2: any;
    vlr3: any;
}