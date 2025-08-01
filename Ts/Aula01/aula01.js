// para executar um arquivo .tsc será preciso utilizar o tscompiller
// colocando o 'tsc' antes do arquivo
// tsc nome_arquivo.ts
// se o compiller der problema
// npm i -g typescript
//código base para variáveis e tipos
// tipos básicos do Ts
var objetoCasa = 'roupeiro';
var idade = 24;
var cores = 'vermelho'; //tipo inferido
var peso = 1.75;
var CIDADE = 'Porto Alegre';
// arrays
var num = [1, 2, 3];
var listaNomes = ["Ana", "Bob", "Bia"];
// types 
var codigo; //este '|' (pipe) significa 'ou' --- União de tipos
codigo = 'abc';
codigo = 123;
//função generica
function identidade(parametro) {
    return parametro;
}
//como se usa
var resUm = identidade('Ana Banana');
var resDois = identidade(1.75);
//como usar
var respostaUm = { resposta: 'Oiii' };
var respostaDois = { resposta: 123 };
var respostaTres = { resposta: false };
