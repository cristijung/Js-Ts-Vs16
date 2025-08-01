interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
}

const mercadoriaLoja: Produto[] = [
  { id: 1, nome: "Calça", preco: 124.99, categoria: "Roupa" },
  { id: 2, nome: "Camiseta", preco: 99.99, categoria: "Roupa" },
  { id: 3, nome: "Casaco", preco: 1345.99, categoria: "Roupa" },
  { id: 4, nome: "Sapato", preco: 624.99, categoria: "Acessórios" },
  { id: 5, nome: "Boné", preco: 24.99, categoria: "Acessórios" },
  { id: 6, nome: "Cachecol", preco: 324.99, categoria: "Acessórios" },
];

//função para listar os produtos
function ListarProdutos(mercadoriaLoja: Produto[]): void {
  mercadoriaLoja.forEach((produto) => {
    console.log(
      `Id: ${produto.id}, Produto: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${produto.categoria}`
    );
  });
}

// função p filtrar os produtos
function FiltrarProdutoPorCategoria(
  mercadoriaLoja: Produto[],
  categoria: string
): Produto[] {  //definição do tipo de retorno DA FUNÇÃO
  return mercadoriaLoja.filter((produto) => produto.categoria === categoria);
}

//função para aumentar o preço das mercadorias
function aumentarPreco(
  mercadoriaLoja: Produto[],
  porcentagem: number
): Produto[] {
  return mercadoriaLoja.map((produto) => {
    const novoPreco = produto.preco * (1 + porcentagem / 100);
    const novoPrecoFormatado = parseFloat(novoPreco.toFixed(2));
    return { ...produto, preco: novoPrecoFormatado };
  });
}

ListarProdutos(mercadoriaLoja);
console.log("\n Produtos com Categoria Roupa: ");
ListarProdutos(FiltrarProdutoPorCategoria(mercadoriaLoja, "Roupa"));

const produtosComAumento = aumentarPreco(mercadoriaLoja, 10);
console.log("\n Produtos com aumentos de 10%: ");
ListarProdutos(produtosComAumento);
