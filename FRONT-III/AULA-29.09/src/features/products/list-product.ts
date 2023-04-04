import { Produto } from "../../types";
import listaProdutos from "../../database";

function listarProdutos() {
    let valorTotalEstoque = 0;

    listaProdutos.forEach(produto => {
        //multiplica o preço do produto pela quantidade
        const valorEstoque = produto.preco * produto.quantidade;
        //soma os valores de estoque de cada produto
        valorTotalEstoque += valorEstoque;
        console.log(`ID: ${produto.id} \n Nome: ${produto.nome} \n Preço: R$${produto.preco.toFixed(2)} \n Quantidade em Estoque: ${produto.quantidade} \n Valor em Estoque: R$${valorEstoque.toFixed(2)} \n`);
    });

    console.log(`Valor total em estoque da loja: R$${valorTotalEstoque.toFixed(2)}`);
}

export default listarProdutos;
