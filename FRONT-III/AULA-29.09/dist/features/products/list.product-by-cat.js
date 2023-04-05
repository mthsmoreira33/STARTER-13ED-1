"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function listarProdutosPorCategoria(categoria) {
    const produtosFiltrados = database_1.default.filter(produto => produto.categoria.nome === categoria.nome);
    if (!produtosFiltrados) {
        return `Não foi possível achar produtos da categoria ${categoria.nome}`;
    }
    console.log(produtosFiltrados);
    produtosFiltrados.forEach(produtos => console.log(`\n Nome: ${produtos.nome} \n Quantidade: ${produtos.quantidade}`));
}
exports.default = listarProdutosPorCategoria;
