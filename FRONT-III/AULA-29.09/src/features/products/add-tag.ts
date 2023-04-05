import { Produto, Tag } from "../../types";
import listaProdutos from "../../database";

function adicionaTag(id: string, tag: Tag[]): string {
  const produto = listaProdutos.find((produto) => produto.id === id);

  if (!produto) {
    return `Produto com id ${id} não encontrado`;
  }

  const tagsJaCadastradas = tag.filter((item) => produto.categoria.tags.includes(item));

  if (tagsJaCadastradas.length > 0) {
    return `O produto já possui a(s) tag(s) ${tagsJaCadastradas} , cadastrada(s)`;
  }

  produto.categoria.tags.push(...tag);

  return `Tag ${tag} adicionada(s) com sucesso ao produto ${produto.nome}`;
}

export default adicionaTag;
