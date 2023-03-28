// Partial<Type> - Constrói um tipo com todas as propriedades de Type definidas como opcionais.

// Required<Type> - Constrói um tipo que consiste em todas as propriedades de Type definidas como necessárias. O oposto de Partial.

// Readonly<Type> - Constrói um tipo com todas as propriedades de Type definidas como readonly, o que significa que as propriedades do tipo construído não podem ser reatribuídas.

// Record<Keys, Type> - Constrói um tipo de objeto cujas chaves de propriedade são Keys e cujos valores de propriedade são Type. Este utilitário pode ser usado para mapear as propriedades de um tipo para outro tipo.

// Pick<Type, Keys> - Constrói um tipo escolhendo o conjunto de propriedades Keys (literal de string ou união de literais de string) de Type.

// Omit<Type, Keys> - Constrói um tipo selecionando todas as propriedades de Type e, em seguida, removendo Keys (literal de string ou união de literais de string).

// NonNullable<Type> - Constrói um tipo excluindo nulo e indefinido de Type.

// ReturnType<Type> - Constrói um tipo que consiste no tipo de retorno da função Type.
