"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function atualizaProduto({ produto, id }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (database_1.default) {
        const index = database_1.default.findIndex(produto => produto.id === id);
        const produtoAtualizado = {
            id: database_1.default[index].id,
            //"produto.nome ?? listaProdutos[index].nome" é o mesmo que "produto.nome ? undefined : listaProdutos[index].nome"
            nome: (_a = produto.nome) !== null && _a !== void 0 ? _a : database_1.default[index].nome,
            preco: (_b = produto.preco) !== null && _b !== void 0 ? _b : database_1.default[index].preco,
            categoria: { nome: (_d = (_c = produto.categoria) === null || _c === void 0 ? void 0 : _c.nome) !== null && _d !== void 0 ? _d : (_e = database_1.default[index].categoria) === null || _e === void 0 ? void 0 : _e.nome, tags: (_g = (_f = produto.categoria) === null || _f === void 0 ? void 0 : _f.tags) !== null && _g !== void 0 ? _g : (_h = database_1.default[index].categoria) === null || _h === void 0 ? void 0 : _h.tags },
            quantidade: (_j = produto.quantidade) !== null && _j !== void 0 ? _j : database_1.default[index].quantidade,
            genero: (_k = produto.genero) !== null && _k !== void 0 ? _k : database_1.default[index].genero
        };
        database_1.default.splice(index, 1, produtoAtualizado);
        return produtoAtualizado;
    }
    return {};
}
exports.default = atualizaProduto;
