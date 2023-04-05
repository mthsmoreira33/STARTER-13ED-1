"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function listarProdutos() {
    let valorTotalEstoque = 0;
    database_1.default.forEach(produto => {
        //multiplica o preço do produto pela quantidade
        const valorEstoque = produto.preco * produto.quantidade;
        //soma os valores de estoque de cada produto
        valorTotalEstoque += valorEstoque;
        return `ID: ${produto.id} \n Nome: ${produto.nome} \n Preço: R$${produto.preco.toFixed(2)} \n Quantidade em Estoque: ${produto.quantidade} \n Valor em Estoque: R$${valorEstoque.toFixed(2)} \n`;
    });
    return `Valor total em estoque da loja: R$${valorTotalEstoque.toFixed(2)}`;
}
exports.default = listarProdutos;
