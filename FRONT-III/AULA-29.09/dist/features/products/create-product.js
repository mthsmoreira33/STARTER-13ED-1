"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function criarProduto(produto) {
    const nomeEncontrado = database_1.default.some(item => item.nome === produto.nome);
    if (nomeEncontrado) {
        return 'O nome do produto enviado já está cadastrado.';
    }
    database_1.default.push(produto);
}
exports.default = criarProduto;
