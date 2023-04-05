import { Produto } from "../../types";
import listaProdutos from "../../database";

function listarProdutos(): string {
    let valorTotalEstoque = 0;
    let lista = "";

    for (const produto of listaProdutos) {
        //multiplica o preço do produto pela quantidade
        const valorEstoque = produto.preco * produto.quantidade;
        //soma os valores de estoque de cada produto
        valorTotalEstoque += valorEstoque;

        lista += `\n ID: ${produto.id} \n Nome: ${produto.nome} \n Preço: R$${produto.preco.toFixed(2)} \n Quantidade em Estoque: ${produto.quantidade} \n Valor em Estoque: R$${valorEstoque.toFixed(2)} \n`;
    }

    return `\nProdutos: ${lista} \nValor total em estoque da loja: R$${valorTotalEstoque.toFixed(2)}`;
}


export default listarProdutos;
