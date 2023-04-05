import { Produto } from "../../types";
import listaProdutos from "../../database";

function listarProdutosPorFaixaDePreco(min: number, max: number): string {
  const produtosFiltrados: Produto[] = listaProdutos.filter(
    produto => produto.preco >= min && produto.preco <= max
  );

  if (produtosFiltrados.length === 0) {
    return "Não foram encontrados produtos nessa faixa de preço";
  }

  const lista = produtosFiltrados.map(produto => `Nome: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`).join("\n");

  return lista;
}

export default listarProdutosPorFaixaDePreco;
