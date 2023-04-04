import { Categoria, Produto } from '../../types';
import listaProdutos from '../../database';

function atualizaProduto({ produto, id }: { produto: Partial<Produto>; id: string; }): Partial<Produto> {
    if (listaProdutos) {
        const index = listaProdutos.findIndex(produto => produto.id === id);

        const produtoAtualizado: Produto = {
            id: listaProdutos[index].id,
            //"produto.nome ?? listaProdutos[index].nome" é o mesmo que "produto.nome ? undefined : listaProdutos[index].nome"
            nome: produto.nome ?? listaProdutos[index].nome,
            preco: produto.preco ?? listaProdutos[index].preco,
            categoria: { nome: produto.categoria?.nome ?? listaProdutos[index].categoria?.nome, tags: produto.categoria?.tags ?? listaProdutos[index].categoria?.tags },
            quantidade: produto.quantidade ?? listaProdutos[index].quantidade,
            genero: produto.genero ?? listaProdutos[index].genero
        };
        listaProdutos.splice(index, 1, produtoAtualizado!);
        return produtoAtualizado;
    }
    return {} as Produto;
}

export default atualizaProduto;
