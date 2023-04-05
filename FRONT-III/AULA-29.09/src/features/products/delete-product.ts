import { Categoria, Produto } from '../../types';
import listaProdutos from '../../database';

function deletaProduto(id: string) {
    const index = listaProdutos.findIndex(produto => produto.id === id);
    if (!id || index === -1) {
        return 'ERRO: ID inválido';
    }

    listaProdutos.splice(index, 1);
    return {} as Produto;
}

export default deletaProduto;
