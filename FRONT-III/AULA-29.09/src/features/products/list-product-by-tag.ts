import { Produto, Tag } from "../../types";
import listaProdutos from "../../database";

function listarProdutosPorTag(tag: Tag): string {
  let valorTotalEstoque = 0;
  const produtosFiltrados: Produto[] = [];

  listaProdutos.forEach(produto => {
    if (produto.categoria.tags.includes(tag)) {
      const valorEstoque = produto.preco * produto.quantidade;
      valorTotalEstoque += valorEstoque;
      produtosFiltrados.push(produto);
    }
  });

  if (produtosFiltrados.length === 0) {
    return `Não foi possível encontrar produtos com a tag ${tag}`;
  }

  let result = "";
  produtosFiltrados.forEach(produto => {
    result += `Nome: ${produto.nome} \nQuantidade em estoque: ${produto.quantidade} \n\n`;
  });

  result += `Valor total em estoque dos produtos com a tag ${tag}: R$${valorTotalEstoque.toFixed(2)}`;

  return result;
}

export default listarProdutosPorTag;
