var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var mercadoriaLoja = [
    { id: 1, nome: "Calça", preco: 124.99, categoria: "Roupa" },
    { id: 2, nome: "Camiseta", preco: 99.99, categoria: "Roupa" },
    { id: 3, nome: "Casaco", preco: 1345.99, categoria: "Roupa" },
    { id: 4, nome: "Sapato", preco: 624.99, categoria: "Acessórios" },
    { id: 5, nome: "Boné", preco: 24.99, categoria: "Acessórios" },
    { id: 6, nome: "Cachecol", preco: 324.99, categoria: "Acessórios" },
];
//função para listar os produtos
function ListarProdutos(mercadoriaLoja) {
    mercadoriaLoja.forEach(function (produto) {
        console.log("Id: ".concat(produto.id, ", Produto: ").concat(produto.nome, ", Pre\u00E7o: ").concat(produto.preco, ", Categoria: ").concat(produto.categoria));
    });
}
// função p filtrar os produtos
function FiltrarProdutoPorCategoria(mercadoriaLoja, categoria) {
    return mercadoriaLoja.filter(function (produto) { return produto.categoria === categoria; });
}
//função para aumentar o preço das mercadorias
function aumentarPreco(mercadoriaLoja, porcentagem) {
    return mercadoriaLoja.map(function (produto) {
        var novoPreco = produto.preco * (1 + porcentagem / 100);
        var novoPrecoFormatado = parseFloat(novoPreco.toFixed(2));
        return __assign(__assign({}, produto), { preco: novoPrecoFormatado });
    });
}
ListarProdutos(mercadoriaLoja);
console.log("\n Produtos com Categoria Roupa: ");
ListarProdutos(FiltrarProdutoPorCategoria(mercadoriaLoja, "Roupa"));
var produtosComAumento = aumentarPreco(mercadoriaLoja, 10);
console.log("\n Produtos com aumentos de 10%: ");
ListarProdutos(produtosComAumento);
