"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./features/products");
const teclado = {
    id: '1234567',
    nome: 'Teclado Red Dragon',
    preco: 189.9,
    categoria: {
        nome: 'Periféricos',
        tags: ['NOVOS'],
    },
    quantidade: 23,
    genero: 'ELETRONICOS',
};
const monitor = {
    id: '123456789',
    nome: 'Monitor Acer',
    preco: 500.0,
    categoria: {
        nome: 'Periféricos',
        tags: ['USADOS'],
    },
    quantidade: 3,
    genero: 'GAMER',
};
const mouse = {
    id: '123',
    nome: 'Mouse Logitech',
    preco: 70.0,
    categoria: {
        nome: 'Periféricos',
        tags: ['BLACKFRIDAY'],
    },
    quantidade: 40,
    genero: 'GAMER',
};
(0, products_1.criarProduto)(teclado);
(0, products_1.criarProduto)(mouse);
(0, products_1.criarProduto)(monitor);
//atualizaProduto({ produto: { nome: 'Headset Gamer' }, id: '123' });
//deletaProduto(monitor.id);
//listarProdutos();
console.log((0, products_1.listarProdutosPorCategoria)({ nome: 'Periféricos' }));
