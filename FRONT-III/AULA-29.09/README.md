1 - Inicialização do projeto em TS - STATUS: OK
2 - Declaração dos modelos de dados (interfaces e types) - STATUS: Caio - OK
3 - Declaração da variável que irá armazenar a lista de produtos - STATUS: Caio - OK
4 - Desenvolvimento da função de cadastro de um novo produto - STATUS: Riquelme - OK
5 - Desenvolvimento da função de atualização de um produto - STATUS: ausente
6 - Desenvolvimento da função de exclusão de um produto - STATUS: ausente
7 - Desenvolvimento da função de listagem dos produtos - STATUS: ausente
8 - Desenvolvimento da função de listagem dos produtos por categoria - STATUS: ausente
9 - Desenvolvimento da função de listagem os produtos por faixa de preço (min e max) - STATUS: ausente
10 - Desenvolvimento da função de listagem dos produtos por tags - STATUS: ausente
11 - Desenvolvimento da função de adicionar uma nova tag à categoria de um produto - STATUS: ausente

PRODUTO
todo produto deve possuir
id: string, nome: string, preco: number, categoria: Categoria, quantidade: number, genero: Genero

CATEGORIA
nome: string, tags: Tag[]

TAG
'BLACKFRIDAY', 'NOVOS', 'USADOS'

GENERO
'ELETRONICOS', 'ELETRODOMESTICOS', 'GAMER'

Requisitos:

-   Toda nova função deve ser um módulo dentro do projeto
-   Dentro de cada pasta deve haver um arquivo index.ts para exportar todos os módulos daquela pasta

4 - CADASTRAR
Crie uma função que deve receber por parametro as informações necessárias para adicionar um novo produto na lista de produtos. A aplicação deve validar e informar se já existe um produto cadastrado com o mesmo nome. Ou seja, não deve ser possível cadastrar produtos com nomes repetidos.

5 - ATUALIZAR
Crie uma função que receba o identificador de um produto e os dados a serem atualizados do produto que tiver esse identificador. Deve ser possível atualizar 1 (uma) ou mais propriedades/informações sobre um produto. A função deve validar se o identificador informado corresponde a um produto da lista de produtos.

6 - EXCLUIR
Crie uma função que receba o identificador de um produto e, a partir deste dado, remova um produto da lista. A função deve validar se o identificador informado corresponde a um produto da lista de produtos.

7 - LISTAR TODOS
Crie uma função percorra a lista de produtos e mostre no console.log apenas id, nome, preço, quantidade em estoque e o valor em estoque da loja. Deve-se considerar a quantidade total de um produto multiplicado pelo valor do produto, assim como, considerar todos os produtos cadastrados/adicionados na lista de produtos.

8 - LISTAR TODOS OS PRODUTOS DE UMA CATEGORIA
Crie uma função que receba o nome de uma categoria por parametro, percorra a lista de produtos e mostre no console.log apenas os produtos cadastrados que tiverem o nome da categoria igual ao que foi recebido por parametro. Na mostragem (console) deve aparecer apenas nome e quantidade em estoque.

9 - LISTAR PRODUTOS POR FAIXA DE PREÇO
Crie uma função que receba um valor minimo e um valor máximo por parametro, percorra a lista de produtos e mostre no console.log apenas os produtos cadastrados cujo preço esteja entre esse minimo e máximo passado por parametro. Na mostragem (console) deve aparecer apenas nome e preço.

10 - LISTAR TODOS OS PRODUTOS DE UMA TAG
Crie uma função que receba o nome de uma tag por parametro, percorra a lista de produtos e mostre no console.log apenas os produtos cadastrados que tiverem a categoria contendo a tag igual ao que foi recebido por parametro. Na mostragem (console) deve aparecer apenas nome e quantidade em estoque e a soma total do valor de estoque desses produtos.

11 - ADICIONAR NOVA TAG
Crie uma função que receba por parametro o id de um produto e a(s) tag(s) a serem adicionadas no produto. Não deve possível um produto possuir duas tags iguais cadastradas. Validar se a tag já está linkada ao produto.
