"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function deletaProduto(id) {
    const index = database_1.default.findIndex(produto => produto.id === id);
    if (!id || index === -1) {
        return 'ERRO: ID inválido';
    }
    database_1.default.splice(index, 1);
    return {};
}
exports.default = deletaProduto;
