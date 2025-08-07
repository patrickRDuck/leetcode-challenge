A questão nós pede para encontrar dois números inteiros em uma lista que a soma deles resulte no valor alvo determinado e retorna o index de cada. 

1. Assim, começamos a função estebelecendo uma variável que deve ser um mapa, essa por sua vez servirá para salvar a relação de valor e index dos elementos da lista.

2. Criaremos um looping for com um contador i que tem como condicional ser menor que o tamanho da lista, o mesmo servirá como index da lista por vez.
    2.1. A estrutura de repetição começa criando uma variável que armazena a diferença entre o elemento do index atual e o valor alvo, essa constante será chamada de complement
    2.2. Em seguida, um condicional deve ser feita para verificar se o valor de complement já foi armazenado no mapa, caso já tenha, será retornado um array com o index atual e o do valor encontrado no map com o complement.
    2.3. Caso a condicional não seja bem sucedida, será armazenado o valor do elemento e o index atual no map.

3. Se o algoritmo sair do looping sem um retorno, significa que não há dois valores na lista que somados resulte o valor alvo. Dessa forma, devemos lançar um erro para comunicar o fato.
