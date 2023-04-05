"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutosPorCategoria = exports.listarProdutos = exports.deletaProduto = exports.atualizaProduto = exports.criarProduto = void 0;
const create_product_1 = __importDefault(require("./create-product"));
exports.criarProduto = create_product_1.default;
const update_product_1 = __importDefault(require("./update-product"));
exports.atualizaProduto = update_product_1.default;
const delete_product_1 = __importDefault(require("./delete-product"));
exports.deletaProduto = delete_product_1.default;
const list_product_1 = __importDefault(require("./list-product"));
exports.listarProdutos = list_product_1.default;
const list_product_by_cat_1 = __importDefault(require("./list.product-by-cat"));
exports.listarProdutosPorCategoria = list_product_by_cat_1.default;
