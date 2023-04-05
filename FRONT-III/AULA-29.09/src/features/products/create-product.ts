import { Produto } from '../../types';
import listaProdutos from '../../database';

function criarProduto(produto: Produto) {
	const nomeEncontrado = listaProdutos.some(
		item => item.nome === produto.nome
	);

	if (nomeEncontrado) {
		return 'O nome do produto enviado já está cadastrado.';
	}

	listaProdutos.push(produto);
}

export default criarProduto;
