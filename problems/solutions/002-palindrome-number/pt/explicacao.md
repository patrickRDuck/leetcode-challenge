Um palíndromo é uma palavra, frase ou número que permanece igual lido de trá para frente.

Diante disso, precisamos desenvolver um algoritmo que consiga inverte o parâmetro x recebidos e compara-lo com o original. Abaixo a sequência de etapas da função:

1. Valores negativos não podem ser palíndromos, portanto, começamos a função com uma condicional que verifica se o dado é positivo, caso contrário já retona-se falso.

2. Cria-se duas variáveis no escopo da função, uma para armazena o valor original e outra para ser usada na construção do reverso.

3. inicia uma estrutura de repetição que tem como condição o valor x ser maior que 0. 
    3.1. o looping inicia criando uma variável para armazena o primeiro dígito da extrema direita do número, esse por sua vez é captura de forma matemática, dividindo o x por 10 para correr a vírgula da direita para esquerda e captura o resto da divisão.
    3.2. a variável reverse é atualizada nessa linha, o novo valor é o resultado do valor anterior multiplicado por 10 (pois adiciona-se uma nova posição ao número) + a variável digit 
    3.3. a variável x que inicialmente foi preenchida pelo argumento dado a função será atualizada, agora dividirá o valor atual dela por 10, afim de separar o digito da direita já capturado, e então excluir a casa decimal desse resultado.

4. Quando sairmos do looping, teremos a variável reverse construído, então, poderemos retornar o resultado lógico de original === reverse

