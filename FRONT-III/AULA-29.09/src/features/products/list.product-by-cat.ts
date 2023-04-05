import { Categoria, Produto } from '../../types';
import listaProdutos from "../../database";

function listarProdutosPorCategoria(categoria: Partial<Categoria>){
    const produtosFiltrados: Produto[] = listaProdutos.filter(
        produto => produto.categoria.nome === categoria.nome
      );
    let lista = "";

      if(produtosFiltrados.length === 0) {
        return `Não foi possível achar produtos da categoria ${categoria.nome}`;
      }

      for (const produto of produtosFiltrados) {
        lista += `\n Nome: ${produto.nome} \n Quantidade em Estoque: ${produto.quantidade}\n`;
      }

      return lista;
}

export default listarProdutosPorCategoria;
