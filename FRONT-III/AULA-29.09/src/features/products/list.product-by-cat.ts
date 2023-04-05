import { Categoria, Produto } from '../../types';
import listaProdutos from "../../database";

function listarProdutosPorCategoria(categoria: Partial<Categoria>){
    const produtosFiltrados: Produto[] = listaProdutos.filter(
        (produto) => produto.categoria.nome === categoria
      );

      produtosFiltrados.forEach((produto) => {
        return `\n Nome: ${produto.nome} \n Quantidade: ${produto.quantidade}`;
      });

      return `Não foi possível achar produtos da categoria ${categoria}`;
}

export default listarProdutosPorCategoria;
