// INTERFACE => quando utilizaremos? quando precisamos criar um tipo para um objeto ou função
// interface User {
// 	readonly name: string;
// 	email: string;
// 	password: string;
// }

// interface Author extends User {
// 	books: string[];
// }

// TYPE => quando utilizaremos? Para tipagem de uma variavel que armazena apenas 1 valor predefinido
// type Genero = 'F' | 'M';
// type Type = number | string;

// let genero: Genero = 'F';
// genero = 'M';
//id: string, nome: string, preco: number, categoria: Categoria, quantidade: number, genero: Genero
//nome: string, tags: Tag[]
type Tag = 'BLACKFRIDAY' | 'NOVOS' | 'USADOS';

type Genero = 'ELETRONICOS' | 'ELETRODOMESTICOS' | 'GAMER';

interface Categoria {
	nome: string;
	tags: Tag[];
}

interface Produto {
	id: string;
	nome: string;
	preco: number;
	categoria: Categoria;
	quantidade: number;
	genero: Genero;
}

export { Categoria, Genero, Produto, Tag };

// // partial
// type UpdateProdutDTO = Omit<Partial<Produto>, 'id'>;

// // // omit
// // type Type = Omit<Produto, 'id'>;

// const updateProduct: UpdateProdutDTO = {
// 	id: '1254',
// 	nome: 'Leticia',
// 	preco: 289.9,
// };
